import Card from './(Components)/Card';

const getAdviceData = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');

  if (!res.ok) {
    throw new Error('Failed to fetch data from Advice API');
  }

  return res.json();
};

export default async function Home() {
  const adviceData = await getAdviceData();

  return <Card initialAdviceData={adviceData} />;
}
