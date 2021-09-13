const manuProject = [
  {
    EPP: {
      endCustomer: "CUSTOMER ELECTRONICS",
      projectName: "SILLY LITTLE PROJECT",
      protoDate: "05/20/2020",
      manuEmail: "salesperson@manu.com",
    },
    parts: [
      {
        name: "part#1",
        qtyPerSystem: 2,
        resale: "$20.33",
      },
      {
        name: "part#2",
        qtyPerSystem: 1,
        resale: "$12.44",
      },
    ],
    eauValue: {
      eau: "3,000",
      value: "$159,300",
    },
    sMFQV: {
      sMFQ: "500",
      value: "$26,550",
    },
  },
];

const distiFeedback = [
  {
    DL: {
      distiEmail: "salesperson@disti.com",
      lastUpdated: "04/16/2020",
    },
    sMFQV: {
      sMFQ: "500",
      value: "$26,550",
    },
  },
];

const repFeedback = [
  {
    RL: {
      repEmail: "salesperson@rep.com",
      lastUpdated: "04/03/2020",
    },
    sMFQV: {
      sMFQ: "250",
      value: "$13,275",
    },
  },
];

export { manuProject, distiFeedback, repFeedback };
