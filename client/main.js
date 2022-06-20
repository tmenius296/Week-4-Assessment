const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const putBtn = document.getElementById("put");
const postBtn = document.getElementById("post");
const deleteBtn = document.getElementById("delete");
const getAllBtn = document.getElementById("getAll");

const getAllNames = () => {
  axios.get("http://localhost:4000/api/names/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const putName = () => {
  axios.put("http://localhost:4000/api/names/", {
    name: document.getElementById("nameInput").value,
  });
};

const postName = () => {
  axios.post("http://localhost:4000/api/names/", {
    name: document.getElementById("nameInput").value,
  });
};

const deleteAllNames = () => {
  axios.delete("http://localhost:4000/api/names/");
};

//////////////////////////////////////////////////////////////////////////

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
getAllBtn.addEventListener("click", getAll);
