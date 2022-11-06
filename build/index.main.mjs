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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v88 = stdlib.protect(ctc0, interact.wager, 'for Aleksa\'s interact field wager');
  
  const v91 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:35:51:application',
    fs: ['at ./index.rsh:33:14:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
    msg: 'getHand',
    who: 'Aleksa'
    });
  const v92 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:36:55:application',
    fs: ['at ./index.rsh:33:14:application call to [unknown function] (defined at: ./index.rsh:33:18:function exp)'],
    msg: 'getResult',
    who: 'Aleksa'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v91, v92, v88],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v88, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94, v95, v96], secs: v98, time: v97, didSend: v33, from: v93 } = txn1;
      
      sim_r.txns.push({
        amt: v96,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v94, v95, v96], secs: v98, time: v97, didSend: v33, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v106, v107], secs: v109, time: v108, didSend: v46, from: v105 } = txn2;
  ;
  let v112;
  const v113 = stdlib.eq(v95, v107);
  if (v113) {
    v112 = stdlib.checkedBigNumberify('./index.rsh:5:12:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v114 = stdlib.safeAdd(v94, v106);
    const v115 = stdlib.eq(v114, v95);
    const v117 = stdlib.eq(v114, v107);
    const v143 = v117 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '1');
    const v144 = v115 ? stdlib.checkedBigNumberify('./index.rsh:7:12:decimal', stdlib.UInt_max, '2') : v143;
    v112 = v144;
    }
  const v118 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:52:16:decimal', stdlib.UInt_max, '2'));
  const v119 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:52:40:decimal', stdlib.UInt_max, '0'));
  const v120 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v121 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v122 = v119 ? v120 : v121;
  const v123 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v124 = v118 ? v123 : v122;
  const v125 = v124[stdlib.checkedBigNumberify('./index.rsh:51:9:array', stdlib.UInt_max, '0')];
  const v126 = v124[stdlib.checkedBigNumberify('./index.rsh:51:9:array', stdlib.UInt_max, '1')];
  const v127 = stdlib.safeMul(v125, v96);
  ;
  const v132 = stdlib.safeMul(v126, v96);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v112), {
    at: './index.rsh:60:24:application',
    fs: ['at ./index.rsh:59:7:application call to [unknown function] (defined at: ./index.rsh:59:29:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v94, v95, v96], secs: v98, time: v97, didSend: v33, from: v93 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v96), {
    at: './index.rsh:43:25:application',
    fs: ['at ./index.rsh:42:14:application call to [unknown function] (defined at: ./index.rsh:42:18:function exp)'],
    msg: 'acceptWager',
    who: 'Ruzica'
    });
  const v103 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:44:51:application',
    fs: ['at ./index.rsh:42:14:application call to [unknown function] (defined at: ./index.rsh:42:18:function exp)'],
    msg: 'getHand',
    who: 'Ruzica'
    });
  const v104 = stdlib.protect(ctc0, await interact.getResult(), {
    at: './index.rsh:45:55:application',
    fs: ['at ./index.rsh:42:14:application call to [unknown function] (defined at: ./index.rsh:42:18:function exp)'],
    msg: 'getResult',
    who: 'Ruzica'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v93, v94, v95, v96, v103, v104],
    evt_cnt: 2,
    funcNum: 1,
    lct: v97,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v96, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v106, v107], secs: v109, time: v108, didSend: v46, from: v105 } = txn2;
      
      sim_r.txns.push({
        amt: v96,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      let v112;
      const v113 = stdlib.eq(v95, v107);
      if (v113) {
        v112 = stdlib.checkedBigNumberify('./index.rsh:5:12:decimal', stdlib.UInt_max, '1');
        }
      else {
        const v114 = stdlib.safeAdd(v94, v106);
        const v115 = stdlib.eq(v114, v95);
        const v117 = stdlib.eq(v114, v107);
        const v143 = v117 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '1');
        const v144 = v115 ? stdlib.checkedBigNumberify('./index.rsh:7:12:decimal', stdlib.UInt_max, '2') : v143;
        v112 = v144;
        }
      const v118 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:52:16:decimal', stdlib.UInt_max, '2'));
      const v119 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:52:40:decimal', stdlib.UInt_max, '0'));
      const v120 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v121 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v122 = v119 ? v120 : v121;
      const v123 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v124 = v118 ? v123 : v122;
      const v125 = v124[stdlib.checkedBigNumberify('./index.rsh:51:9:array', stdlib.UInt_max, '0')];
      const v126 = v124[stdlib.checkedBigNumberify('./index.rsh:51:9:array', stdlib.UInt_max, '1')];
      const v127 = stdlib.safeMul(v125, v96);
      sim_r.txns.push({
        kind: 'from',
        to: v93,
        tok: undefined /* Nothing */
        });
      const v132 = stdlib.safeMul(v126, v96);
      sim_r.txns.push({
        kind: 'from',
        to: v105,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v106, v107], secs: v109, time: v108, didSend: v46, from: v105 } = txn2;
  ;
  let v112;
  const v113 = stdlib.eq(v95, v107);
  if (v113) {
    v112 = stdlib.checkedBigNumberify('./index.rsh:5:12:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v114 = stdlib.safeAdd(v94, v106);
    const v115 = stdlib.eq(v114, v95);
    const v117 = stdlib.eq(v114, v107);
    const v143 = v117 ? stdlib.checkedBigNumberify('./index.rsh:9:12:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:11:12:decimal', stdlib.UInt_max, '1');
    const v144 = v115 ? stdlib.checkedBigNumberify('./index.rsh:7:12:decimal', stdlib.UInt_max, '2') : v143;
    v112 = v144;
    }
  const v118 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:52:16:decimal', stdlib.UInt_max, '2'));
  const v119 = stdlib.eq(v112, stdlib.checkedBigNumberify('./index.rsh:52:40:decimal', stdlib.UInt_max, '0'));
  const v120 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v121 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v122 = v119 ? v120 : v121;
  const v123 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v124 = v118 ? v123 : v122;
  const v125 = v124[stdlib.checkedBigNumberify('./index.rsh:51:9:array', stdlib.UInt_max, '0')];
  const v126 = v124[stdlib.checkedBigNumberify('./index.rsh:51:9:array', stdlib.UInt_max, '1')];
  const v127 = stdlib.safeMul(v125, v96);
  ;
  const v132 = stdlib.safeMul(v126, v96);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v112), {
    at: './index.rsh:60:24:application',
    fs: ['at ./index.rsh:59:7:application call to [unknown function] (defined at: ./index.rsh:59:29:function exp)'],
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
  appApproval: `ByAEAAEIAiYCAAEAIjUAMRhBAb0oZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAN4jEkQjNAESRDQESSISTDQCEhFEKWRJNQNJgShbNf+BMFs1/kk1BUkiWzX9JFs1/IAEx7YK1TT9FlA0/BZQsDT+iAFqNP80/BJBAAYjNftCABs0A4EgWzT9CDX6IyI0+jT8Ek0lNPo0/xJNNfuAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0+yISTYAQAAAAAAAAAAIAAAAAAAAAADT7JRJNNfqxIrIBNPoiWzT+C7III7IQNANXACCyB7OxIrIBNPokWzT+C7III7IQMQCyB7NCAGJIgaCNBogAxyI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwNP2IAI0xADT/FlA0/hZQNP0WUClLAVcAOGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 56,
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
                "name": "v94",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v94",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v95",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v106",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
  Bytecode: `0x6080604052604051610ad3380380610ad383398101604081905261002291610246565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a1602081015160400151610099903414600761014e565b6100cd604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a090930190528151610146926002920190610177565b505050610313565b816101735760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610183906102d8565b90600052602060002090601f0160209004810192826101a557600085556101eb565b82601f106101be57805160ff19168380011785556101eb565b828001600101855582156101eb579182015b828111156101eb5782518255916020019190600101906101d0565b506101f79291506101fb565b5090565b5b808211156101f757600081556001016101fc565b604051606081016001600160401b038111828210171561024057634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561025957600080fd5b604080519081016001600160401b038111828210171561028957634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156102a257600080fd5b6102aa610210565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806102ec57607f821691505b6020821081141561030d57634e487b7160e01b600052602260045260246000fd5b50919050565b6107b1806103226000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b3660046105d9565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610369565b6040516100649291906105f1565b6100c86001600054146009610406565b6100e2813515806100db57506001548235145b600a610406565b6000808055600280546100f49061064e565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061064e565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610683565b905061018f6104e2565b604080513381528435602080830191909152850135818301529084013560608201527f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101ef826060015134146008610406565b604082810151908401351415610208576001815261024e565b60208083015161021a91850135610430565b6020820181905260408301511461024857602081015160408401351461024157600161024b565b600061024b565b60025b81525b604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805182905251909101919091528151146102aa578051156102a05780606001516102b0565b80604001516102b0565b80608001515b60a082018190528251905160608401516001600160a01b03909216916108fc916102d991610483565b6040518115909202916000818181858888f19350505050158015610301573d6000803e3d6000fd5b50336001600160a01b03166108fc6103258360a00151602001518560600151610483565b6040518115909202916000818181858888f1935050505015801561034d573d6000803e3d6000fd5b506000808055600181905561036490600290610583565b505050565b60006060600054600280805461037e9061064e565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa9061064e565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b50505050509050915091509091565b8161042c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261043d8382610722565b915081101561047d5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610423565b92915050565b60008115806104a757508282610499818361073a565b92506104a59083610759565b145b61047d5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610423565b6040518060c001604052806000815260200160008152602001610518604051806040016040528060008152602001600081525090565b815260200161053a604051806040016040528060008152602001600081525090565b815260200161055c604051806040016040528060008152602001600081525090565b815260200161057e604051806040016040528060008152602001600081525090565b905290565b50805461058f9061064e565b6000825580601f1061059f575050565b601f0160209004906000526020600020908101906105bd91906105c0565b50565b5b808211156105d557600081556001016105c1565b5090565b6000606082840312156105eb57600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561062557858101830151858201606001528201610609565b81811115610637576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061066257607f821691505b602082108114156105eb57634e487b7160e01b600052602260045260246000fd5b60006080828403121561069557600080fd5b6040516080810181811067ffffffffffffffff821117156106c657634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146106e057600080fd5b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156107355761073561070c565b500190565b60008160001904831182151516156107545761075461070c565b500290565b60008261077657634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212202f8e736189a699a984884968b111a8713a944818aacb738319795bc89cbb578564736f6c634300080c0033`,
  BytecodeLen: 2771,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:57:11:after expr stmt semicolon',
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
