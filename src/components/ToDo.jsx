import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function ToDo() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='slideShow' interval={null}>
            <Carousel.Item className='slideShowItem'>
                <h4>Tips from the Developers</h4><hr />
                <h5>Travel tips</h5>
                <ol>
                    <li>Take lots of pictures!</li>
                    <li>Travel off-season</li>
                    <li>Roll up your clothes to maximize suitcase space</li>
                    <li>Make a playlist</li>
                    <li>Make a list so you don't forget what you brought</li>
                    <li>Plan activites in advance</li>
                </ol>
            </Carousel.Item>
            <Carousel.Item className='slideShowItem'>
            <h4>Tips from the Developers</h4><hr />
                <h5>Shows to binge</h5>
                <ol>
                    <li>Breaking Bad</li>
                    <li>Entourage</li>
                    <li>The Wire</li>
                    <li>Avatar the Last Airbender</li>
                    <li>Sweet Tooth</li>
                    <li>Criminal Minds</li>
                </ol>
            </Carousel.Item>
            <Carousel.Item className='slideShowItem'>
            <h4>Tips from the Developers</h4><hr />
                <h5>Activites to find</h5>
                <ol>
                    <li>Hiking spots</li>
                    <li>Coffee shops</li>
                    <li>Small book stores</li>
                    <li>Local sports groups</li>
                    <li>Play video games at 'home'</li>
                </ol>
            </Carousel.Item>
        </Carousel>
    );
}

export default ToDo;