import React, { useState } from 'react'
import Modal from 'react-modal';

const Header = () => {
    let [state, setState] = useState(false)
    let [val, setVal] = useState("")
  return (
    <section>
      <article>
        <nav>
          <div>LOGO</div>
          <div>
            <ul>
              <li
                onClick={e => {
                  setState(true);
                  setVal(e.target.innerText);
                }}
              >
                Home
              </li>
              <li
                onClick={e => {
                setState(true);
                setVal(e.target.innerText);
                }}
              >
                Contact
              </li>
              <li
                onClick={e => {
                 setState(true);
                 setVal(e.target.innerText);
                }}
              >
                Login
              </li>
              <li
                onClick={e => {
                 setState(true);
                 setVal(e.target.innerText);
                }}
              >
                Sign Up
              </li>
            </ul>
          </div>
        </nav>
          </article>
          <Modal isOpen={state} shouldCloseOnOverlayClick={true} style={{
              overlay: {
                  background: "",
                  width: "50%",
                  height:"60vh",
                  margin: "0 auto",
                  position: "absolute",
                  top: "20%",
                  transform:"translate(-50% -50%)"
              },
              content:{
                  background: "cadetBlue",
                  color: "gold",
                  margin:"0 auto",
                  width: "80%",
                  height:"70%"
              },
          }}>
              <h1>{val}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt, quasi consequatur quod ullam obcaecati, delectus maxime blanditiis qui doloremque et? Voluptates repellendus sunt assumenda recusandae necessitatibus harum fuga libero?</p>
              <button onClick={()=>{ setState(false)}} style={{background:"goldenRod",color:"cadetblue",padding:"10px 20px",border:"none",borderRadius:"10px"}}>OK</button>
          </Modal>
    </section>
  );
}

export default Header
