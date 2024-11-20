import { getHello } from '@/app/actions/actions';
import Hello from '@/app/components/hello';

export default async function Home() {
  const resultFromServerAction = await getHello();

  return (
    <main>
      <h1>Hello from server component!</h1>

      <p>Result from server action: {resultFromServerAction}</p>

      <Hello />
    </main>
  );
}
