import { pokeballLoader } from '../assets';

const PokeballLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
      }}
    >
      <img src={pokeballLoader} alt='pokeball loader' />
    </div>
  );
};

export default PokeballLoader;
