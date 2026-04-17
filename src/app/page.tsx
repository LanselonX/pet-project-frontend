import { MealsInfo } from "../features/main-card/components/meals-info";

export default function Home() {
  return (
    <div>
      <MealsInfo />
    </div>
  );
}

// import { MealsInfo } from "../features/main-card/components/meals-info";
// import { getAllMeals } from "../features/main-card/api/get-meal";

// interface Props {
//   searchParams: Promise<{ [key: string]: string | undefined }>;
// }

// export default async function Home(props: Props) {
//   const searchParams = await props.searchParams;

//   const page = Number(searchParams.page ?? 1);
//   // TODO: check this
//   const limit = 6;

//   const meals = await getAllMeals({ page, limit });

//   return (
//     <div>
//       <MealsInfo {...meals} limit={limit} />
//     </div>
//   );
// }
