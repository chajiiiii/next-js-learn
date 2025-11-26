import Link from "next/link";

export default function Meals() {
  return (
    <div>
      Meals
      <ul>
        <li>
          <Link href="/meals/pasta">pasta</Link>
        </li>
        <li>
          <Link href="/meals/kimchi">kimchi</Link>
        </li>
        <li>
          <Link href="/meals/steak">steak</Link>
        </li>
      </ul>
    </div>
  );
}
