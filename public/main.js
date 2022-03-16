let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response);
        //把符合JSON的字符串变成对象或者是其他
        myName.textContent = object.name;
      } else {
        alert("加载JSON 失败");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest(); //readyState=0
  request.open("GET", "/4.xml"); //readyState=1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载xml 失败");
      }
    }
  };
  request.send(); //readyState=2
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        const div = document.createElement("div");
        //创建div标签
        div.innerHTML = request.response;
        //填写div内容
        document.body.appendChild(div);
        //插到body里面
      } else {
        alert("加载html 失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        const script = document.createElement("script");
        //创建script标签
        script.innerHTML = request.response;
        //填写script内容
        document.body.appendChild(script);
        //插到body里面
      } else {
        alert("加载js 失败");
      }
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //readyState=0
  request.open("GET", "/style.css"); //readyState=1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("成功了");
        const style = document.createElement("style");
        //创建style标签
        style.innerHTML = request.response;
        //填写style内容
        document.head.appendChild(style);
        //插到head里面
      } else {
        alert("加载css 失败");
      }
    }
  };
  request.send(); //readyState=2
};
