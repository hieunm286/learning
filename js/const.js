export const target = [
  {
    "id": "QeXW9gp8rW",
    "options": {
      "loop": {
        "min": 1,
        "max": 1
      },
      "random": true
    },
    "sections": [
      {
        "id": "WG2KoR4wXZ",
        "name": "Section 01",
        "options": {
          "onError": "retry",
          "retryCount": 3
        },
        "type": "section",
        "steps": [
          {
            "id": "wiyTZT2fXB",
            "name": "Lấy giá trị từ mảng",
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-by-picking-from-array",
              "variableName": "abc",
              "sourceVariableName": "bien_1",
              "valueIndex": "0",
              "randomPosition": "true"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "A4mgIpUj1H",
            "name": "Lấy giá trị từ phần tử",
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-from-element-text-by-selector",
              "variableName": "das",
              "selector": "{{bien_1}}{{abc}}",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "xpath": "",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "9YxJjr9J6r",
            "name": "Vòng lặp",
            "parentId": null,
            "type": "step",
            "isNested": true,
            "nestedType": "step",
            "options": {
              "randomPosition": "false",
              "elementIndex": "0",
              "type": "loop-from-array-of-variable",
              "arrayVariableName": "bien_1",
              "xpath": "",
              "selector": "",
              "count": "1",
              "valueVariableName": "ggg",
              "indexVariableName": "hhh",
              "isShuffle": "false",
              "ignoreIfNotFound": "false",
              "elementSelectorVariableName": "ggg",
              "steps": [
                {
                  "id": "rC18WmPC2r",
                  "name": "Lấy thuộc tính phần tử",
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "assign-variable-from-element-attribute-by-selector",
                    "variableName": "loop2",
                    "attributeName": "bvcvcv",
                    "selector": "{{bien2}}",
                    "ignoreIfNotFound": "false",
                    "elementIndex": "1",
                    "xpath": "",
                    "randomPosition": "false",
                    "htmlSelector": "",
                    "htmlXpath": ""
                  },
                  "chosen": false,
                  "selected": false
                },
                {
                  "id": "ZetvRNpaKo",
                  "name": "Vòng lặp",
                  "parentId": null,
                  "type": "step",
                  "isNested": true,
                  "nestedType": "step",
                  "options": {
                    "randomPosition": "false",
                    "elementIndex": "0",
                    "type": "loop-by-count",
                    "arrayVariableName": "",
                    "xpath": "",
                    "selector": "",
                    "count": "1",
                    "valueVariableName": "",
                    "indexVariableName": "sdgsdf",
                    "isShuffle": "false",
                    "ignoreIfNotFound": "false",
                    "elementSelectorVariableName": "",
                    "steps": [
                      {
                        "id": "OTk4QroCz8",
                        "name": "Lấy giá trị từ liên kết",
                        "parentId": null,
                        "type": "step",
                        "steps": [],
                        "options": {
                          "type": "assign-variable-from-url",
                          "variableName": "dasdas",
                          "property": "full-url",
                          "extractType": "full-url"
                        },
                        "chosen": false,
                        "selected": false
                      }
                    ]
                  },
                  "chosen": false,
                  "selected": false
                }
              ]
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "p1zrirxS67",
            "name": "Điều kiện if-else",
            "parentId": null,
            "type": "step",
            "isNested": true,
            "nestedType": "step",
            "options": {
              "type": "if-else-condition",
              "variableName": "abc",
              "comparator": "equal",
              "compareValue": "123",
              "stepsIfSatisfyCondition": [
                {
                  "id": "theaUNgvWp",
                  "name": "Điều hướng trang",
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "make-tab-go-back",
                    "timeOut": "5000",
                    "waitCondition": "networkidle2"
                  },
                  "chosen": false,
                  "selected": false
                },
                {
                  "id": "PHKRnvYME9",
                  "name": "Chụp màn hình",
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "screen-shot-page",
                    "fileName": "screenshot",
                    "fileType": "jpeg",
                    "imageQuality": "100",
                    "captureFullPage": "true",
                    "directoryPath": "dsa"
                  },
                  "chosen": false,
                  "selected": false
                }
              ],
              "stepsIfNotSatisfyCondition": [
                {
                  "id": "s0s0YaBvrV",
                  "name": "Click chuột",
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "click-by-selector",
                    "selector": "vds",
                    "xpath": "",
                    "ignoreIfNotFound": "false",
                    "elementIndex": "1",
                    "mouseButton": "left",
                    "clickCount": "1",
                    "clickDelay": "350",
                    "randomPosition": "false"
                  },
                  "chosen": false,
                  "selected": false
                }
              ]
            },
            "chosen": false,
            "selected": false
          }
        ],
        "isNested": true,
        "nestedType": "step",
        "chosen": false,
        "selected": false
      }
    ],
    "name": "Block 01",
    "type": "block",
    "isNested": true,
    "nestedType": "section",
    "chosen": false,
    "selected": false
  }
]
