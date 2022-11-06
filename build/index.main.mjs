// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Aleksa(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Aleksa expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Aleksa expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v65 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:32:51:application',
    fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:18:function exp)'],
    msg: 'getHand',
    who: 'Aleksa'
    });
  const v66 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:33:55:application',
    fs: ['at ./index.rsh:31:14:application call to [unknown function] (defined at: ./index.rsh:31:18:function exp)'],
    msg: 'getResult',
    who: 'Aleksa'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v65, v66],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v68, v69], secs: v71, time: v70, didSend: v29, from: v67 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v68, v69], secs: v71, time: v70, didSend: v29, from: v67 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v77, v78], secs: v80, time: v79, didSend: v40, from: v76 } = txn2;
  ;
  let v81;
  const v82 = stdlib.eq(v69, v78);
  if (v82) {
    v81 = stdlib.checkedBigNumberify('./index.rsh:5:12:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v83 = stdlib.safeAdd(v68, v77);
    const v84 = stdlib.eq(v83, v69);
    const v86 = stdlib.eq(v83, v78);
    const v93 = v86 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '1');
    const v94 = v84 ? stdlib.checkedBigNumberify('./index.rsh:7:12:decimal', stdlib.UInt_max, '2') : v93;
    v81 = v94;
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v81), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:29:function exp)'],
    msg: 'seeOutcome',
    who: 'Aleksa'
    });
  
  return;
  
  
  
  
  };
export async function Ruzica(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Ruzica expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Ruzica expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v68, v69], secs: v71, time: v70, didSend: v29, from: v67 } = txn1;
  ;
  const v74 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:40:51:application',
    fs: ['at ./index.rsh:39:14:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
    msg: 'getHand',
    who: 'Ruzica'
    });
  const v75 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:41:55:application',
    fs: ['at ./index.rsh:39:14:application call to [unknown function] (defined at: ./index.rsh:39:18:function exp)'],
    msg: 'getResult',
    who: 'Ruzica'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v68, v69, v74, v75],
    evt_cnt: 2,
    funcNum: 1,
    lct: v70,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v77, v78], secs: v80, time: v79, didSend: v40, from: v76 } = txn2;
      
      ;
      let v81;
      const v82 = stdlib.eq(v69, v78);
      if (v82) {
        v81 = stdlib.checkedBigNumberify('./index.rsh:5:12:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v83 = stdlib.safeAdd(v68, v77);
        const v84 = stdlib.eq(v83, v69);
        const v86 = stdlib.eq(v83, v78);
        const v93 = v86 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '1');
        const v94 = v84 ? stdlib.checkedBigNumberify('./index.rsh:7:12:decimal', stdlib.UInt_max, '2') : v93;
        v81 = v94;
        }
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v77, v78], secs: v80, time: v79, didSend: v40, from: v76 } = txn2;
  ;
  let v81;
  const v82 = stdlib.eq(v69, v78);
  if (v82) {
    v81 = stdlib.checkedBigNumberify('./index.rsh:5:12:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v83 = stdlib.safeAdd(v68, v77);
    const v84 = stdlib.eq(v83, v69);
    const v86 = stdlib.eq(v83, v78);
    const v93 = v86 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '1');
    const v94 = v84 ? stdlib.checkedBigNumberify('./index.rsh:7:12:decimal', stdlib.UInt_max, '2') : v93;
    v81 = v94;
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v81), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:29:function exp)'],
    msg: 'seeOutcome',
    who: 'Ruzica'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByADAAEIJgEAIjUAMRhBAPwoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAADEjEkQjNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gATHtgrVNP8WUDT+FlCwQgBOSIGgjQaIALQiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP8WNP4WUIABAEsBVwAQZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 16,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v77",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106de3803806106de833981016040819052610022916101e8565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1610085341560076100f0565b60408051808201825260008082526020808301828152858201805151808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e89260029290910190610119565b50505061027d565b816101155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012590610242565b90600052602060002090601f016020900481019282610147576000855561018d565b82601f1061016057805160ff191683800117855561018d565b8280016001018555821561018d579182015b8281111561018d578251825591602001919060010190610172565b5061019992915061019d565b5090565b5b80821115610199576000815560010161019e565b604080519081016001600160401b03811182821017156101e257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101fb57600080fd5b6102036101b2565b835181526040601f198301121561021957600080fd5b6102216101b2565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025657607f821691505b6020821081141561027757634e487b7160e01b600052602260045260246000fd5b50919050565b6104528061028c6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610315565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101fd565b60405161006492919061032d565b6100c8600160005414600961029a565b6100e2813515806100db57506001548235145b600a61029a565b6000808055600280546100f49061038a565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061038a565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103bf565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101e33415600861029a565b600080805560018190556101f9906002906102bf565b5050565b6000606060005460028080546102129061038a565b80601f016020809104026020016040519081016040528092919081815260200182805461023e9061038a565b801561028b5780601f106102605761010080835404028352916020019161028b565b820191906000526020600020905b81548152906001019060200180831161026e57829003601f168201915b50505050509050915091509091565b816101f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102cb9061038a565b6000825580601f106102db575050565b601f0160209004906000526020600020908101906102f991906102fc565b50565b5b8082111561031157600081556001016102fd565b5090565b60006060828403121561032757600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561036157858101830151858201606001528201610345565b81811115610373576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061039e57607f821691505b6020821081141561032757634e487b7160e01b600052602260045260246000fd5b6000604082840312156103d157600080fd5b6040516040810181811067ffffffffffffffff8211171561040257634e487b7160e01b600052604160045260246000fd5b60405282518152602092830151928101929092525091905056fea2646970667358221220691a01fff8ae7f95b3d20e3e062e290f726116575a8ca15eb6022df9206812fe64736f6c634300080c0033`,
  BytecodeLen: 1758,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Aleksa": Aleksa,
  "Ruzica": Ruzica
  };
export const _APIs = {
  };
