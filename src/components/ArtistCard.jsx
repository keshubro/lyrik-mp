import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)} className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
            <img alt="artist" src={track?.images?.coverart} className="w-full round-lg h-56" />
            <p className='mt-4 font-semibold text-lg text-white truncate'>{track?.subtitle}</p>
        </div>
    );
};

export default ArtistCard;
