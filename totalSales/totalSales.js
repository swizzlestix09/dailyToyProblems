// `totalSales` accepts one argument, an object containing an employee who manages
// a sales team, and returns the total sales for the entire team. Note: it is possible
// that any employee also manages a team.
//
// An employee looks like this:
//
// {
//   name: 'Fred Zirdung',
//   individualSales: 125,
//   leadsInProgress: 48,
//   manages: [/* ... */]
// }
//
// EXAMPLE:
//
var salesTeam = {
  name: 'Arnaldo McDermott',
  individualSales: 14,
  leadsInProgress: 10,
  manages: [
    {
      name: 'Lavina Romaguera',
      individualSales: 15,
      leadsInProgress: 22,
      manages: [
        {
          name: 'Glen Hodkiewicz',
          individualSales: 12,
          leadsInProgress: 10,
          manages: []
        }
      ]
    },
    {
      name: 'Rey Hills',
      individualSales: 19,
      leadsInProgress: 5,
      manages: []
    }
  ]
};
//
//
// totalSales(salesTeam)
//
// returns 60



var totalSales = function (salesTeam) {
  //create total variable for return
  var total = 0;
  //iterate through object
  for (var data in salesTeam) {
    if (data === 'individualSales') {
      total += salesTeam[data]
    }
  }

  if (salesTeam['manages']) {
    for (var i = 0; i < salesTeam['manages'].length; i++) {
      total += totalSales( salesTeam['manages'][i] );
    }
  }
  return total
};

console.log( totalSales(salesTeam) )