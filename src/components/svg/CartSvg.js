import { h } from 'preact';

function CartSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-shopping-cart"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="9" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
    </svg>
  );
}

export default CartSvg;
