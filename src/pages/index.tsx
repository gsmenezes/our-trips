import dynamic from 'next/dynamic';

const Map = dynamic(() => import('Components/Map'), { ssr: false });

export default function Home() {
  return <Map places={[]} />;
}
