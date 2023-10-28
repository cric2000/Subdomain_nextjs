import Layout from '../components/content';
import 'app/globals.css'
import Card from '../components/card';
const Home = () => {
  return (
    <Layout
  headerText="Cookies"
  footerText="subDomain"
  headerColor="bg-blue-700"
  footerColor="bg-gray-100"
  mainColor="bg-white"
>
  <Card
    color="bg-orange-300"
    title="Cookie Time"
    content="Best cookies in the world"
    textColor="text-black"
    imageSrc="/cookie.webp"
  width="100px"
  height="100px"
  />
    <Card
    color="bg-orange-800"
    title=" What's your fourtune?"
    content="Fortune cookies, the popular crispy, hollow cookies often served in Chinese restaurants, are not of Chinese origin. They were actually invented in California, USA, in the early 20th century. These cookies often contain a small slip of paper with a message or fortune inside, which adds an element of fun and surprise to the dining experience. While they may not be Chinese, they have become an iconic part of American Chinese cuisine and are enjoyed by people around the world."
    textColor="text-white"
    imageSrc="/cookie.webp"
  width="100px"
  height="100px"
  />
</Layout>

  );
};

export default Home;
