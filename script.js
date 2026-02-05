const form = document.getElementById("form");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const errorEl = document.getElementById("error");
const idealLine = document.getElementById("idealLine");
const timeLine = document.getElementById("timeLine");
document.getElementById("year").textContent = new Date().getFullYear();

function devineIdealWeightKg(heightCm, gender) {
  const inches = heightCm / 2.54;
  const inchesOver5ft = inches - 60;
  const base = gender === "M" ? 50 : 45.5;
  return base + 2.3 * inchesOver5ft;
}

function estimateTimeToGoal(currentKg, goalKg) {
  const diff = currentKg - goalKg;
  if (diff <= 0) return "Você já está abaixo/na faixa do peso estimado. Foque em saúde e composição corporal.";
  const kgPerWeek = 0.5;
  const weeks = diff / kgPerWeek;
  const months = weeks / 4.345;
  return `Estimativa: ~${Math.ceil(weeks)} semanas (aprox. ${Math.ceil(months)} meses) mantendo um ritmo saudável.`;
}

function parseNumber(value) {
  return Number(String(value).trim().replace(",", "."));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorEl.textContent = "";

  const gender = new FormData(form).get("gender");
  const height = parseNumber(heightEl.value);
  const weight = parseNumber(weightEl.value);

  if (!gender || !Number.isFinite(height) || !Number.isFinite(weight) || height <= 0 || weight <= 0) {
    errorEl.textContent = "Preencha com valores válidos e positivos.";
    return;
  }

  const ideal = devineIdealWeightKg(height, gender);
  const idealRounded = Math.round(ideal * 10) / 10;

  idealLine.innerHTML = `Seu <strong>Peso Ideal</strong> estimado: <strong>${idealRounded} kg</strong>.`;
  timeLine.textContent = estimateTimeToGoal(weight, idealRounded);
});
