import Layout from '../components/content';
import Card from '../components/card';
import 'app/globals.css'

const subdomain1 = () => {
  return (
    <Layout
    headerText="Chocolate"
    footerText="subDomain"
    headerColor="bg-pink-900"
    footerColor="bg-gray-100"
    mainColor="bg-white"
  >
    <Card
      color="bg-pink-300"
      title="Chocolate Cookie Time"
      content="Best cookies in the world"
      textColor="text-black"
      imageSrc="/choco.avif"
    width="100px"
    height="100px"
    />
      <Card
      color="bg-pink-500"
      title="Health Benefits"
      content="Dark chocolate used in cookies contains antioxidants that may offer some health benefits, such as improving heart health and reducing stress."
      textColor="text-white"
      imageSrc="/choco.avif"
    width="100px"
    height="100px"
    />
  </Layout>

  );
};

export default subdomain1;
