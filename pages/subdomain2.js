import Layout from '../components/content';
import Card from '../components/card';
import 'app/globals.css'
const subdomain2 = () => {
  return (
    <Layout
    headerText="Vanilla"
    footerText="subDomain"
    headerColor="bg-gray-700"
    footerColor="bg-gray-100"
    mainColor="bg-white"
  >
    <Card
      color="bg-purple-300"
      title="Vanilla Cookie Time"
      content="3rd Best cookies in the world"
      textColor="text-black"
      imageSrc="/vanilla.png"
    width="100px"
    height="100px"
    />
      <Card
      color="bg-purple-700"
      title="Versatility"
      content="Vanilla cookies serve as a versatile base for various flavors and add-ins. You can easily customize them by adding chocolate chips, nuts, dried fruits, or even frosting."
      textColor="text-white"
      imageSrc="/vanilla.png"
    width="100px"
    height="100px"
    />
  </Layout>
  );
};

export default subdomain2;
