import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/upjIUnG.jpg'
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Extra bacon',
      description: 'Criado para os amantes do bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
      price: 23.5,
      image: 'https://i.imgur.com/B4J04AJ.jpg'
    }
  ];

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  );
}