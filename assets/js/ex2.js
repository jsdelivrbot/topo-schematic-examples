const cy = window.cy = cytoscape({
  container: document.getElementById('ex1'),

  layout: {
    name: 'preset',
    animate: false,
    padding: 10,
    fit: true
  },

  style: [
    {
      selector: 'node',
      style: {
        'content': 'data(name)',
        'background-color': '#ad1a66'
      }
    },

    {
      selector: ':parent',
      style: {
        'background-opacity': 0.333
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ad1a66'
      }
    }
  ],

  elements: [
    // Building 1
    {
      data: {
        id: 'n0',
        name: 'Building 1'
      },
      position: {x: -49.47370486656201, y: 37.452904238618515},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n0:n0',
        parent: 'n0',
        name: 'Level 1'
      },
      position:
        {x: -49.47370486656202, y: 45.202904238618515},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n0:n0:n0',
        parent: 'n0:n0',
        name: 'Room 1'
      },
      position: {x: -49.47370486656202, y: 52.952904238618515},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n0:n0:n0:n0',
        parent: 'n0:n0:n0',
        name: 'Dev 1'
      },
      position:
        {x: -90.212715855573, y: 61.77001569858712},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n0:n0:n0:n1',
        parent: 'n0:n0:n0',
        name: 'Dev 2'
      },
      position: {x: -8.734693877551031, y: 60.135792778649915},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    // Building 2
    {
      data: {
        id: 'n1',
        name: 'Building 2'
      },
      position:
        {x: 247.47645211930922, y: 103.15266875981169},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n0',
        parent: 'n1',
        name: 'Level 1'
      },
      position: {x: 185.78453689167975, y: 43.89952904238623},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n1',
        parent: 'n1',
        name: 'Level 2'
      },
      position: {x: 251.2256671899529, y: 178.72291993720575},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n0:n0',
        parent: 'n1:n0',
        name: 'Room 1'
      },
      position: {x: 185.78453689167975, y: 51.64952904238623},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n1:n0',
        parent: 'n1:n1',
        name: 'Room 2'
      },
      position: {x: 140.50706436420725, y: 186.88147566719005},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n1:n1',
        parent: 'n1:n1',
        name: 'Room 3'
      },
      position: {x: 312.10047095761377, y: 186.47291993720575},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n0:n0:n0',
        parent: 'n1:n0:n0',
        name: 'Dev 3'
      },
      position: {x: 133.00863422291994, y: 58.42386185243332},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n0:n0:n1',
        parent: 'n1:n0:n0',
        name: 'Dev 4'
      },
      position: {x: 238.56043956043956, y: 60.87519623233913},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n1:n0:n1',
        parent: 'n1:n1:n0',
        name: 'Dev 5'
      },
      position: {x: 140.50706436420725, y: 194.88147566719005},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n1:n1:n0',
        parent: 'n1:n1:n1',
        name: 'Dev 6'
      },
      position:
        {x: 262.25667189952907, y: 194.06436420722144},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: 'n1:n1:n1:n1',
        parent: 'n1:n1:n1',
        name: 'Dev 7'
      },
      position: {x: 361.9442700156985, y: 194.88147566719005},
      group: "nodes",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },


    // Connections
    {
      data: {
        id: "e1",
        source: "n1:n1:n1:n0",
        target: "n1:n1:n1:n1"
      },
      position: { },
      group: "edges",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: "e2",
        source: "n0:n0:n0:n0",
        target: "n0:n0:n0:n1"
      },
      position: { },
      group: "edges",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    },
    {
      data: {
        id: "e3",
        source: "n1:n1:n1:n0",
        target: "n1:n1:n0:n1"
      },
      position: { },
      group: "edges",
      removed: false,
      selected: false,
      selectable: true,
      locked: false,
      grabbed: false,
      grabbable: true,
      classes: ""
    }
  ]
});