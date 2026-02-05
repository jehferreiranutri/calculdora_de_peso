:root{
  --bg:#0b0b10;
  --card:#121221;
  --text:#ffffff;
  --muted:#b6b6c7;
  --line:rgba(255,255,255,.15);
  --accent:#9b5cff;
  --danger:#ff6b6b;
}

*{
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  padding:20px;
}

.card{
  max-width:700px;
  margin:auto;
  background:var(--card);
  border-radius:20px;
  padding:22px;
}

h1{
  text-align:center;
}

.subtitle{
  text-align:center;
  color:var(--muted);
}

.box{
  border:1px solid var(--line);
  border-radius:16px;
  padding:16px;
}

.form{
  display:grid;
  gap:14px;
}

.field label{
  display:block;
  margin-bottom:5px;
  color:var(--muted);
}

input{
  width:100%;
  padding:12px;
  border-radius:10px;
  border:none;
}

.grid{
  display:grid;
  gap:12px;
}

.radio-row{
  display:flex;
  gap:10px;
}

.radio{
  background:#1c1c2c;
  padding:10px 14px;
  border-radius:20px;
}

.btn{
  background:var(--accent);
  border:none;
  padding:14px;
  border-radius:12px;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

.results{
  margin-top:20px;
  border-top:1px solid var(--line);
  padding-top:15px;
}

.error{
  color:var(--danger);
}

.cta{
  margin-top:25px;
  text-align:center;
  padding:18px;
  border-radius:16px;
  background:#1c1c2c;
}

.btn-cta{
  display:inline-block;
  margin-top:10px;
  background:#22c55e;
  color:black;
  padding:14px 26px;
  border-radius:12px;
  text-decoration:none;
  font-weight:bold;
}

.footer{
  margin-top:20px;
  text-align:center;
  color:var(--muted);
}
