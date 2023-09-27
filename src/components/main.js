import React, { useRef, useState, useEffect } from 'react';
import { sepetDiv } from './nav';

export default function Main(props) {
  const data = props.data
  const openModal = useRef(null);
  const [selectedCar, setSelectedCar] = useState(null)
  const [count, setCount] = useState(1)



  //Close Span
  function span() {
    if (openModal.current.style.display === "none" || openModal.current.style.display === "") {
      openModal.current.style.display = "block";
    } else {
      openModal.current.style.display = "none";
    }
  }
  //Alert Buy İtems

  function handleBuyClick(src, name, price) {
    setSelectedCar({ src, name, price });
    alert(`${name + " Adlı Ürününüz " + price + " Fiyatı İle " + "Sepetinize Eklenmiştir."}`)


    if (sepetDiv.current) {

      const itemsDiv = document.createElement("div");
      itemsDiv.classList.add(`item-${count}`);
      setCount(count + 1)

      const img = document.createElement("img");
      img.src = src;
      img.alt = name;
      itemsDiv.appendChild(img);

      const h1 = document.createElement("h1");
      h1.innerHTML = name
      itemsDiv.appendChild(h1)

      const h5 = document.createElement("h5");
      h5.innerHTML = price
      itemsDiv.appendChild(h5)

      const btn = document.createElement("button");
      btn.innerHTML = "Ürünü Sil"
      btn.addEventListener("click", () => {
        itemsDiv.remove()
      })
      itemsDiv.appendChild(btn)

      sepetDiv.current.appendChild(itemsDiv);
    }


  }

  //Open Modal İtems
  function modalBox(src, name, price) {
    setSelectedCar({ src, name, price });
    if (!selectedCar) return;
    if (openModal.current.style.display === "none" || openModal.current.style.display === "") {
      openModal.current.style.display = "block";
    } else {
      openModal.current.style.display = "none";
    }
  }

  const [filtrelenmisVeri,setFiltrelenmisVeri] = useState(data);
  const [arama,setArama] = useState("");

  const aramaGuncelleme = (event)=>{
    const yeniArama = event.target.value;
    setArama(yeniArama);

    const filtelenmis = data.filter((item)=>
      item.name.toLowerCase().includes(yeniArama.toLowerCase())
     
    )
    setFiltrelenmisVeri(filtelenmis);
  };
  



  return (
    <div className='container'>
      <label htmlFor="search">Arama Yapın</label>
      <input
        id='search'
        type="search"
        placeholder='Araç Arayın'
        value={arama}
        onChange={aramaGuncelleme}

      />
      <div className='items'>
        {filtrelenmisVeri.map((item, index) => {
          return (
            <div className='siteMain' key={index}>
              <img src={item.src} alt={item.name} />
              <h2>{item.name}</h2>
              <h5>{item.price}</h5>
              <div className='btn'>
                <button onClick={() => handleBuyClick(item.src, item.name, item.price)} id='btn-1'>Satın Almak İçin Tıklayın</button>
                <button onClick={() => modalBox(item.src, item.name, item.price)} id='btn-2'>Bilgi Almak İçin Tıklayın</button>
                {selectedCar && (
                  <div ref={openModal} className='infoModalBox'>
                    <span onClick={() => span()} className="close">&times;</span>
                    <img src={selectedCar.src} alt={selectedCar.name} />
                    <h2>{selectedCar.name}</h2>
                    <h5>{selectedCar.price}</h5>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
