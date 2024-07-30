import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ToDo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='slideShow'>
      <Carousel.Item inverval={15000}>
        <h2>test</h2>
        <ol>
            <li>hiking</li>
            <li>camping</li>
        </ol>
      </Carousel.Item>
      <Carousel.Item inverval={15000}>
        <h2>test2</h2>
      </Carousel.Item>
      <Carousel.Item inverval={15000}>
        <h2>test3</h2>
      </Carousel.Item>
    </Carousel>
  );
}

export default ToDo;