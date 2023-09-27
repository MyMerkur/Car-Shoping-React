import React, { useRef, useState } from 'react';
let sepetDiv

export default function Nav(props) {
    const brandDropdown = useRef(null);
    const carsDropdown = useRef(null);
    const priceDropdown = useRef(null);
    const branchDropdown = useRef(null);
    const main = useRef(null);
    const sidebar = useRef(null);
     sepetDiv = useRef(null);
const[count,setCount]=useState(1)
    function arttir(){
        setCount(count+1)
    }    
    function azalt(){
        setCount(count-1)
    }


    function openNav(){
        sidebar.current.style.width = "250px"
        main.current.style.marginLeft = "250px"
    }
    function closeNav(){
        sidebar.current.style.width = "0"
        main.current.style.marginLeft = "0"
    }
    function brand() {
        if (brandDropdown.current.style.display === "none" || brandDropdown.current.style.display === "") {
            brandDropdown.current.style.display = "flex";
          } else {
            brandDropdown.current.style.display = "none";
          }
          
    }
    function cars() {
        if (carsDropdown.current.style.display === "none" || carsDropdown.current.style.display === "") {
            carsDropdown.current.style.display = "flex";
          } else {
            carsDropdown.current.style.display = "none";
          }
          
    }
    function priceList() {
        if (priceDropdown.current.style.display === "none" || priceDropdown.current.style.display === "") {
            priceDropdown.current.style.display = "flex";
          } else {
            priceDropdown.current.style.display = "none";
          }
          
    }
    function branch() {
        if (branchDropdown.current.style.display === "none" || branchDropdown.current.style.display === "") {
            branchDropdown.current.style.display = "flex";
          } else {
            branchDropdown.current.style.display = "none";
          }   
    }

    function buyİtems(){
        alert("Sepetiniz Onaylanmıştır")
        window.location.reload();
    }


    return (
        <div>
            <nav>
                <ul>
                    {/* Birinci Kısım */}
                    <li>
                        <a href="#">Anasayfa</a>
                    </li>
                    {/* İkinci Kısım */}
                    <li>
                        <a onClick={brand} href="#">Markalar</a>
                        <div ref={brandDropdown} className="brandDropdown">
                            <ul>
                                <li>Audi</li>
                                <li>Mercedes</li>
                                <li>Ferrari</li>
                                <li>Porsche</li>
                                <li>Mustang</li>
                            </ul>
                        </div>
                    </li>
                    {/* Üçüncü Kısım */}
                    <li>
                        <a onClick={cars} href="#">Araçlar</a>
                        <div ref={carsDropdown} className="carsDropdown">
                            <ul>
                                <li>Luxury Class</li>
                                <li>High Class</li>
                                <li>Middle Class</li>
                                <li>Low Class</li>
                                <li>Other Class</li>
                            </ul>
                        </div>
                    </li>
                    {/* Dördüncü Kısım */}
                    <li>
                        <a onClick={priceList} href="#">Fiyat Listesi</a>
                        <div ref={priceDropdown} className='priceDropdown'>
                            <ul>
                                <li>Luxury Class Cars Price</li>
                                <li>High Class Cars Price</li>
                                <li>Low Class Cars Price</li>
                                <li id='other'>Diğer Araçlar İçin <a href="#">İletişime</a> Geçin</li>
                            </ul>
                        </div>
                    </li>
                    {/* Beşinci Kısım */}
                    <li>
                        <a onClick={branch} href="#">Şubelerimiz</a>
                        <div ref={branchDropdown} className='branchDropdown'>
                            <ul>
                                <li>İstanbul</li>
                                <li>Ankara</li>
                                <li>Amsterdam</li>
                                <li>Berlin</li>
                            </ul>
                        </div>
                    </li>
                    {/* Sepet Kısmı */}
                    <li ref={main} id='main'>
                        <a className='openbtn' onClick={openNav} href="#">☰Sepet</a>
                        <div ref={sidebar} id="mySidebar" className="sidebar">
                            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                            <h1 id='sideBarTitle'>Seçtiğiniz Ürünler</h1>
                            <hr />
                            
                            <div className='sepetDiv' ref={sepetDiv}>

                                <button onClick={()=>arttir()}>+</button>
                                <button onClick={()=>azalt()}>-</button>
                                <span>{count}</span>
                            </div>

                            <button className='buyİtems' onClick={()=>buyİtems()}>Sepetini Onaylamak İçin</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export {sepetDiv}
