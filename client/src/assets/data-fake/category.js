// const category = [
//   // {
//   //   id:0,
//   //   display: "Hãng Dell",
//   //   category: "Dell",
//   //   icon: "laptop",
//   //   type: "",
//   //   children: [
//   //       {
//   //         displaychild: "Macbook air M1",
//   //       },
//   //       {
//   //         displaychild: "Macbook air M2",
//   //       },
//   //       {
//   //         displaychild: "Macbook pro M1",
//   //       },
//   //       {
//   //         displaychild: "Macbook pRO M2",
//   //       },
//   //     ],
//   // },
//   {
//     id:1,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//         categoryslug:"macbook"
//       },
//       {
//         displaychild: "Macbook air M2",
//         categoryslug:"macbook"
//       },
//       {
//         displaychild: "Macbook pro M1",
//         categoryslug:"macbook"
//       },
//       {
//         displaychild: "Macbook pRO M2",
//         categoryslug:"macbook"
//       },
//     ],
//   },
//   {
//     id:22,
//     display: "Hãng MSI",
//     category: "MSI",
//     icon: "laptop",
//     type: "",
//     children: [
//       {
//         displaychild: "Laptop MSI",
//         categoryslug:"Msi-modern"
//       },
//       {
//         displaychild: "Macbook air M2",
//         categoryslug:"Msi-modern1"
//       },
//       {
//         displaychild: "Macbook pro M1",
//         categoryslug:"Msi-modern2"
//       },
//       {
//         displaychild: "Macbook pRO M2",
//         categoryslug:"Msi-modern3"
//       },
//     ],
//   },
//   {
//     id:3,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//       },
//       {
//         displaychild: "Macbook air M2",
//       },
//       {
//         displaychild: "Macbook pro M1",
//       },
//       {
//         displaychild: "Macbook pRO M2",
//       },
//     ],
//   },
//   {
//     id:4,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//       },
//       {
//         displaychild: "Macbook air M2",
//       },
//       {
//         displaychild: "Macbook pro M1",
//       },
//       {
//         displaychild: "Macbook pRO M2",
//       },
//     ],
//   },
//   {
//     id:5,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//       },
//       {
//         displaychild: "Macbook air M2",
//       },
//       {
//         displaychild: "Macbook pro M1",
//       },
//       {
//         displaychild: "Macbook pRO M2",
//       },
//     ],
//   }
// ];
// export default category;
const category = [
  {
    key: "MSI",
    label: "Hãng MSI",
    icon: "laptop",
    type: "",
    category: "MSI",
    children: [
      {
        label: "Laptop MSI",
        key: "MSImodernreal",
        categoryslug: "Msi-modern",
      },
      {
        label: "Laptop MSI",
        key: "MSImodern",
        categoryslug: "Laptop MSI",
      },
      {
        label: "Laptop MSI",
        key: "MSImodernkatana",
        categoryslug: "Laptop MSI",
      },
    ],
  },
  {
    key: "Apple",
    label: "Hãng Apple",
    icon: "apple",
    type: "logo",
    category: "Apple",
    children: [
      {
        label: "Macbook",
        key: "AppleMacPro",
        categoryslug: "Msi-modern",
      },
      {
        label: "Macbook",
        key: "AppleMacProm2",
        categoryslug: "Laptop MSI",
      },
      {
        label: "Macbook",
        key: "AppleMacProm3",
        categoryslug: "Laptop MSI",
      },
    ],
  }
];
export default category;
