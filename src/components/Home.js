import React from 'react';
import './Home.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="homeSection">
        <h2>Welcome to our page!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce imperdiet, enim non congue pretium, est lectus tincidunt arcu,
          ut tristique ligula risus a ipsum. Aenean tincidunt orci elit, sed
          commodo massa laoreet a. Proin non odio condimentum justo bibendum
          fermentum non eu sapien. Quisque nec erat non risus ultricies dictum.
          Sed a lacus tincidunt lectus vulputate facilisis. Etiam semper, urna
          sit amet rhoncus rhoncus, urna augue venenatis ligula, at posuere orci
          magna sit amet augue. Nunc imperdiet neque ex, in consectetur libero vestibulum nec.
        </p>
        <p>
          Etiam lacinia nisl nisl, pulvinar sagittis tellus feugiat eu.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Cras vel ornare massa, a auctor leo.
          Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque vel ligula iaculis,
          interdum urna non, feugiat ipsum. Etiam at ligula magna.
          Donec auctor purus nec quam cursus bibendum in sit amet mi.
          Proin at feugiat lectus, quis rhoncus enim. Aliquam quis finibus odio.
          Maecenas est arcu, dapibus nec quam non, accumsan elementum magna.
          Nam eu vestibulum massa. In scelerisque tempor risus,
          nec varius eros volutpat sit amet. Donec vestibulum vestibulum metus.
          Integer in tortor nulla.
        </p>
      </div>
    );
  }
}

export default Home;
