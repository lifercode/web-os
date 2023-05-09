import { OsProvider } from '@react-os/core'
import programs from '../programs';

function Home() {
  return <OsProvider programs={programs} />;
}

export default Home;
