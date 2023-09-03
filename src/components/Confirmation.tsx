import { useParams } from 'react-router-dom';

const Confirmation = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col m-16 p-8 bg-gray-500/30 rounded">
        <h1>Thank you for placing an order with us.</h1>
        <div>Confirmation for Order#: {id}</div>
      </div>
    </div>
  );
}

export default Confirmation;
