import './App.css';
import { useState } from 'react';

function App() {
 const dugmad = [
  {id: "divide", klasa: "operacija", sadrzaj: "/"},
  {id: "multiply", klasa: "operacija", sadrzaj: "x"},
  {id: "seven", klasa: "jedan", sadrzaj: 7},
  {id: "eight", klasa: "jedan", sadrzaj: 8},
  {id: "nine", klasa: "jedan", sadrzaj: 9},
  {id: "subtract", klasa: "minus", sadrzaj: "-"},
  {id: "four", klasa: "jedan", sadrzaj: 4},
  {id: "five", klasa: "jedan", sadrzaj: 5},
  {id: "six", klasa: "jedan", sadrzaj: 6},
  {id: "add", klasa: "operacija", sadrzaj: "+"},
  {id: "one", klasa: "jedan", sadrzaj: 1},
  {id: "two", klasa: "jedan", sadrzaj: 2},
  {id: "three", klasa: "jedan", sadrzaj: 3},
  {id: "equals", klasa: "jedan", sadrzaj: "="},
  {id: "zero", klasa: "jedan", sadrzaj: 0},
  {id: "decimal", klasa: "jedan", sadrzaj: "."},
  {id: "clear", klasa: "jedan", sadrzaj: "AC"}
 ];

 const [num, setNum] = useState(0);
 const [plus, setPlus] = useState(0);
 const [minus, setMinus] = useState(0);
 const [puta, setPuta] = useState(0);
 const [puta2, setPuta2] = useState(0);
 const [deli, setDeli] = useState(0);
 const [deli2, setDeli2] = useState(0);
 const [akcija, setAkcija] = useState("");
 const [rezerva, setRezerva] = useState("");
 const [decimal, setDecimal] = useState("");
 

  const count = (i) => {
    const klik = document.getElementById(i);
    const vrednost = klik.value;
    if(vrednost === "AC") {
      clear(vrednost);
    } else if (num === "Error") {
      clear();
    } else if (num === 0 && vrednost === "-") {
      setNum(vrednost); 
    } else if ((num === 0 && klik.className === "operacija") || (num === 0 && vrednost === "=") ) { 
      setNum("Error"); 
    } else if (num === "-" && vrednost === "-") {
      setNum("Error");
    }else if (vrednost === ".") {
      decimala(vrednost);
    } else if (vrednost === "x") {
      mnozi(vrednost);
    } else if (vrednost === "/") {
      deljenje(vrednost);
    } else if (vrednost === "+") {
      sabiraj(vrednost);
    } else if (vrednost === "-") {
      oduzimaj(vrednost);
    } else if (vrednost === "=") {
      racunaj(vrednost);
    } else if (num !== 0) {
      setNum(num + vrednost);
    } else if(num === 0 && Number(vrednost) === 0) {
      setNum(0);
    } else if(num === 0) {
      setNum(vrednost);
    }
  }

  const mnozi = (vrednost) => {
    if(puta === 0 && akcija === "") {
      setPuta(Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ( puta !== 0 && akcija === "x") {
      setPuta(puta * Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ((puta === 0 && akcija === "+") || (puta === 0 && akcija === "-") ) {
      setPuta(Number(num));
      setRezerva(akcija);
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (puta === 0 && akcija === "/") {
      setPuta(deli / Number(num))
      setAkcija(vrednost);
      setNum(0);
      setDeli(0);
      setDecimal("");
    } else if ((puta !== 0 && akcija === "+") || (puta !== 0 && akcija === "-") ) {
      setPuta2(Number(num));
      setRezerva(akcija);
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ((puta !== 0 && puta2 !== 0 && rezerva === "+" && akcija === "*") || (puta !== 0 && puta2 !== 0 && rezerva === "-" && akcija === "*") ) {
      setPuta2(puta2 * Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ((puta !== 0 && puta2 !== 0 && rezerva === "+" && akcija === "/") || (puta !== 0 && puta2 !== 0 && rezerva === "-" && akcija === "/") ) {
      setPuta2(deli / Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (puta !== 0 && akcija === "/") {
      setPuta(deli / Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDeli(0);
      setDecimal("");
    }
  }

  const deljenje = (vrednost) => {
    if(deli === 0 && akcija === "") {
      setDeli(Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ( deli !== 0 && akcija === "/") {
      setDeli(deli / Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ((deli === 0 && akcija === "+") || (deli === 0 && akcija === "-") ) {
      setDeli(Number(num));
      setRezerva(akcija);
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (deli === 0 && akcija === "x") {
      setDeli(puta * Number(num))
      setAkcija(vrednost);
      setNum(0);
      setPuta(0);
      setDecimal("");
    } else if ((deli !== 0 && akcija === "+") || (deli !== 0 && akcija === "-") ) {
      setDeli2(Number(num));
      setRezerva(akcija);
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ((deli !== 0 && deli2 !== 0 && rezerva === "+" && akcija === "/") || (deli !== 0 && deli2 !== 0 && rezerva === "-" && akcija === "/") ) {
      setDeli2(deli2 / Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if ((deli !== 0 && deli2 !== 0 && rezerva === "+" && akcija === "*") || (deli !== 0 && deli2 !== 0 && rezerva === "-" && akcija === "*") ) {
      setDeli2(puta * Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (deli !== 0 && akcija === "*") {
      setDeli(puta * Number(num));
      setAkcija(vrednost);
      setNum(0);
      setPuta(0);
      setDecimal("");
    }
  }

  const sabiraj = (vrednost) => {
    if (plus === 0 && akcija === "") {
      setPlus(Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (plus !== 0 && akcija === "+") {
      setPlus(plus + Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (plus === 0 && akcija === "-") {
      setPlus(minus - Number(num));
      setAkcija(vrednost);
      setNum(0);
      setMinus(0);
      setDecimal("");
    } else if (plus === 0 && akcija === "x" && rezerva === "") {
      setPlus(puta * Number(num));
      setAkcija(vrednost);
      setNum(0);
      setPuta(0);
      setDecimal("");
    } else if (plus === 0 && akcija === "/" && rezerva === "") {
      setPlus(deli / Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDeli(0);
      setDecimal("");
    } else if ( rezerva === "+" && akcija === "x") {
      setPlus(puta * Number(num) + plus);
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setPuta(0);
      setDecimal("");
    } else if ( rezerva === "+" && akcija === "/") {
      setPlus(deli / Number(num) + plus);
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setDeli(0);
      setDecimal("");
    } else if ( rezerva === "-" && akcija === "x") {
      setPlus(minus - puta * Number(num));
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setMinus(0);
      setPuta(0);
      setDecimal("");
    } else if ( rezerva === "-" && akcija === "/") {
      setPlus(minus - deli / Number(num));
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setMinus(0);
      setDeli(0);
      setDecimal("");
    }
  }

  const oduzimaj = (vrednost) => {
    if (minus === 0 && akcija === "") {
      setMinus(Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (minus === 0 && akcija === "+") {
      setMinus(plus + Number(num));
      setAkcija(vrednost);
      setNum(0);
      setPlus(0);
      setDecimal("");
    } else if (minus !== 0 && akcija === "-") {
      setMinus(minus - Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDecimal("");
    } else if (minus === 0 && akcija === "x" && rezerva === "") {
      setMinus(puta * Number(num));
      setAkcija(vrednost);
      setNum(0);
      setPuta(0);
      setDecimal("");
    } else if (minus === 0 && akcija === "/" && rezerva === "") {
      setMinus(deli / Number(num));
      setAkcija(vrednost);
      setNum(0);
      setDeli(0);
      setDecimal("");
    } else if ( rezerva === "-" && akcija === "x") {
      setMinus(minus - puta * Number(num));
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setPuta(0);
      setDecimal("");
    } else if ( rezerva === "-" && akcija === "/") {
      setMinus(minus - deli / Number(num));
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setDeli(0);
      setDecimal("");
    } else if ( rezerva === "+" && akcija === "x") {
      setMinus(plus + puta * Number(num));
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setPlus(0);
      setPuta(0);
      setDecimal("");
    } else if ( rezerva === "+" && akcija === "/") {
      setMinus(plus + deli / Number(num));
      setAkcija(vrednost);
      setRezerva("");
      setNum(0);
      setPlus(0);
      setDeli(0);
      setDecimal("");
    }
  }

  const racunaj = (vrednost) => {
    if (akcija === "x" && rezerva === "") {
      setNum(puta * Number(num));
      equal(vrednost);
    } else if (akcija === "/" && rezerva === "") {
      setNum(deli / Number(num));
      equal(vrednost);
    } else if (akcija === "x" && rezerva === "+") {
      setNum(plus + puta * Number(num));
      equal(vrednost);
    } else if (akcija === "/" && rezerva === "+") {
      setNum(plus + deli / Number(num));
      equal(vrednost);
    } else if (akcija === "/" && rezerva === "-") {
      setNum(minus - deli / Number(num));
      equal(vrednost);
    } else if (akcija === "x" && rezerva === "-") {
      setNum(minus - puta * Number(num));
      equal(vrednost);
    } else if (akcija === "+") {
      setNum(plus + Number(num));
      equal(vrednost);
    } else if (akcija === "-") {
      setNum(minus - Number(num));
      equal(vrednost);
    }
  }

  const decimala = (vrednost) => {
    if (num === 0 && decimal === "") {
      setNum(num + vrednost);
      setDecimal(vrednost);
    } else if ( num !== 0 && decimal === ".") {
      setNum(num);
    } else if (num !== 0 && decimal !== ".") {
      setNum(num + vrednost);
      setDecimal(vrednost);
    }
  }

  const clear = (vrednost) => {
   setNum(0);
   setAkcija("");
   setDecimal("");
   setDeli(0);
   setMinus(0);
   setPlus(0);
   setRezerva("");
   setPuta(0);
   setPuta2(0);
   setDeli2(0);
  }

  const equal = (vrednost) => {
   setAkcija("");
   setDecimal("");
   setDeli(0);
   setMinus(0);
   setPlus(0);
   setRezerva("");
   setPuta(0);
   setPuta2(0);
   setDeli2(0);
  }

  return (
    <div className="App">
      <div className='sadrzaj'>
        <div id="display" >
          <div className='final'>{num}</div>  
        </div>  
        {dugmad.map((item) => <button key={item.id} onClick={() => count(item.id)} id={item.id} className={item.klasa} value={item.sadrzaj}>{item.sadrzaj}</button> )}
      </div>
    </div>
  );
}

export default App;
