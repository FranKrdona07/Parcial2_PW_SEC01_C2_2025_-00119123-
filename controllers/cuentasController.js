//lista todas las cuentas o las busca con queryParam
exports.getCuentas = (req, res) => {
  const { queryParam } = req.query;

  if (!queryParam) {
    return res.json({
      count: cuentas.length,
      data: cuentas,
    });
  }

  const resultados = cuentas.filter(
    (c) =>
      c._id === queryParam ||
      c.client.toLowerCase().includes(queryParam.toLowerCase()) ||
      c.gender.toLowerCase() === queryParam.toLowerCase()
  );

  if (resultados.length === 1) {
    res.json({
      finded: true,
      account: resultados[0],
    });
  } else if (resultados.length > 1) {
    res.json({
      finded: true,
      data: resultados,
    });
  } else {
    res.json({
      finded: false,
      data: [],
    });
  }
};


//obtiene una cuenta por id
exports.getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find((c) => c._id === id);

  res.json({
    finded: !!cuenta,
    account: cuenta || null,
  });
};

//suma balances de cuentas activas
exports.getBalanceTotal = (req, res) => {
  const activas = cuentas.filter((c) => c.isActive);

  if (activas.length === 0) {
    return res.json({ status: false, accountBalance: 0 });
  }

  const total = activas.reduce((acc, c) => {
    const valor = parseFloat(c.balance.replace(/[$,]/g, ""));
    return acc + valor;
  }, 0);

  res.json({
    status: true,
    accountBalance: `$${total.toLocaleString()}`,
  });
};

//jsons
const cuentas = [
  {
    _id: "68f9679713c2a566ae0d6a9d",
    isActive: true,
    picture: "http://placehold.it/32x32",
    balance: "$2,970.29",
    client: "Edwina Branch",
    gender: "female"
  },
  {
    _id: "68f9679797b4732a88a4d9eb",
    isActive: false,
    picture: "http://placehold.it/32x32",
    balance: "$3,862.24",
    client: "Robert Booker",
    gender: "female"
  },
  {
    _id: "68f9679711a4e4799a96b1f8",
    isActive: true,
    picture: "http://placehold.it/32x32",
    balance: "$2,598.41",
    client: "Therese Parks",
    gender: "female"
  },
  {
    _id: "68f967976ce55b52396f7471",
    isActive: false,
    picture: "http://placehold.it/32x32",
    balance: "$2,114.91",
    client: "Cummings Watson",
    gender: "male"
  },
  {
    _id: "68f96797e665b8ee1685070f",
    isActive: true,
    picture: "http://placehold.it/32x32",
    balance: "$3,290.43",
    client: "Dorothy Blackburn",
    gender: "female"
  },
  {
    _id: "68f967973251860a95978c84",
    isActive: false,
    picture: "http://placehold.it/32x32",
    balance: "$1,919.78",
    client: "Bianca William",
    gender: "female"
  },
  {
    _id: "68f96797d02e8db72d98513e",
    isActive: true,
    picture: "http://placehold.it/32x32",
    balance: "$3,730.83",
    client: "Henry Simpson",
    gender: "male"
  },
  {
    _id: "68f97427b0e4a0b7a37dd671",
    isActive: true,
    picture: "http://placehold.it/32x32",
    balance: "$2,081.17",
    client: "Nicholson Morin",
    gender: "male"
  },
  {
    _id: "68f97427f65be5329285df41",
    isActive: true,
    picture: "http://placehold.it/32x32",
    balance: "$2,029.37",
    client: "Delaney Patton",
    gender: "male"
  },
  {
    _id: "68f97427d7595d98e7abd870",
    isActive: false,
    picture: "http://placehold.it/32x32",
    balance: "$3,225.56",
    client: "Luisa Tanner",
    gender: "female"
  }
];