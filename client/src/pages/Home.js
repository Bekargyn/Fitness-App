import React from 'react';
import {Carousel} from 'react-bootstrap';
import Weightbar from '../assets/bar.jpeg';
import Healthy from '../assets/healthy.jpeg';
import Sled from '../assets/sled.jpeg';
import Ropes from '../assets/ropes.jpeg';


export const Home = () => (
        <div class="Whole-page">
            {/* <div class="header">
                <h1>EZBRO</h1>
            </div>
            <nav>

            </nav>
            <div class="content">
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae recusandae assumenda obcaecati architecto dolore eligendi rem ipsa possimus aliquam. Saepe, consequatur! Quam, quod quos velit fuga magnam exercitationem impedit?
Facere repellat temporibus aliquam doloremque exercitationem dolores totam eveniet ex. Voluptatem, eos suscipit tempora mollitia itaque facere facilis quas expedita reiciendis eius ad provident dolorum enim quam, atque doloremque odit.
Inventore placeat quia eveniet, sapiente cumque ad nam saepe ducimus impedit optio, asperiores deleniti reiciendis veniam error nesciunt. Maxime libero aspernatur aliquam maiores optio molestiae odio cum ab distinctio exercitationem?
                </p>

            </div>
            <div class="footer">

            </div> */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Weightbar}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Workout</h3>
      <p>Select from premade workouts or create your own.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Ropes}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Exercise</h3>
      <p>Fill your workouts with a variety of diffrent exercises</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Sled}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Coming Soon</h3>
      <p>Schedule your workouts and plan for next week</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Healthy}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>Coming Soon</h3>
      <p>Enter what you eat to stay on top of your diet</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
