export const treeData = [
  {
    "id": "xyJFBLznn6",
    "options": {
      "loop": {
        "min": 1,
        "max": 1
      },
      "random": true
    },
    "sections": [
      {
        "id": "7iiQW8d6Ba",
        "name": "Section 01",
        "options": {
          "onError": "retry",
          "retryCount": 3
        },
        "type": "section",
        "steps": [
          {
            "id": "L_KDF86iUo",
            "name": "Lấy giá trị từ Google sheet",
            "parentId": null,
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-from-gg-sheet",
              "variableName": "video_ids",
              "fromRowIndex": "1",
              "toRowIndex": "200",
              "columnIndex": "1",
              "sheetIndex": "1",
              "sheetID": "1jQ7dJ2xxWQUHyUtrgQn6F7qNfCC3AeOu8gVGguvHXeQ"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "eN7krrv2cO",
            "name": "Vòng lặp",
            "parentId": null,
            "type": "step",
            "isNested": true,
            "nestedType": "step",
            "options": {
              "randomPosition": "false",
              "elementIndex": "0",
              "type": "loop-from-array-of-variable",
              "arrayVariableName": "video_ids",
              "xpath": "",
              "selector": "",
              "count": "1",
              "valueVariableName": "video_id",
              "indexVariableName": "video_index",
              "isShuffle": "false",
              "ignoreIfNotFound": "false",
              "elementSelectorVariableName": "video_id",
              "steps": [
                {
                  "id": "7HT82igV23",
                  "name": "Truy cập đường dẫn",
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "visit-an-url",
                    "url": "https://business.facebook.com/latest/inbox/messenger?asset_id=137929910269322&nav_ref=pages_classic_isolated_section_inbox_redirect&mailbox_id=&selected_item_id={{video_id}}",
                    "timeOut": "60000",
                    "waitCondition": "networkidle2"
                  },
                  "chosen": false,
                  "selected": false
                },
                {
                  "id": "svpa4G9KHw",
                  "name": "Chờ...",
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "wait-for-duration",
                    "minDuration": "1000",
                    "maxDuration": "5000"
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

export const longTreeData = [
  {
    "id": "myOeYDuvPb",
    "options": {
      "loop": {
        "max": "1",
        "min": "1"
      },
      "random": false
    },
    "sections": [
      {
        "id": "oH3eWkEwHN",
        "name": "Lướt Shopee",
        "options": {
          "onError": "retry",
          "retryCount": "3"
        },
        "type": "section",
        "steps": [
          {
            "id": "A5WIvp-bKe",
            "name": "Truy cập đường dẫn",
            "type": "step",
            "steps": [],
            "options": {
              "type": "visit-an-url",
              "url": "https://shopee.vn/",
              "timeOut": "60000",
              "waitCondition": "networkidle2"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "lMKnBYHe7T",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "1gG4YTf02C",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "Escape"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "5hm3ensAZk",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "hH8M3Cn4BE",
            "name": "Click chuột chọn ô tìm kiếm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//form[@role=\"search\"]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "XpyTqKp8G4",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "6k1rKmkaG2",
            "name": "Lấy giá trị từ Google sheet",
            "parentId": null,
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-from-gg-sheet",
              "variableName": "Admin_sheet_shoppe",
              "fromRowIndex": "1",
              "toRowIndex": "10",
              "columnIndex": "1",
              "sheetIndex": "1",
              "sheetID": "1Hm5jVoE_dgVlqh_igYOH757l3Ept_b9PXHcBhoqDbzI"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "F0q9_3U6MK",
            "name": "Lấy giá trị từ mảng",
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-by-picking-from-array",
              "variableName": "Bien1",
              "sourceVariableName": "Admin_sheet_shoppe",
              "valueIndex": "0",
              "randomPosition": "true"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "YF8S42Vs4I",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "v0jkY9GXds",
            "name": "Gõ chữ vào phần tử",
            "type": "step",
            "steps": [],
            "options": {
              "type": "type-by-xpath",
              "ignoreIfNotFound": "false",
              "typingDelay": "350",
              "elementIndex": "1",
              "selector": "",
              "xpath": "//form[@role=\"search\"]",
              "randomPosition": "false",
              "content": "{{Bien1}}"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "TubCswBFtN",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "gHFqJdtfLE",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "Enter"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "G_LIEFEVah",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "cAzgIPhOBj",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "400",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "kpTFMnodCu",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "yXPhU1o6mR",
            "name": "Điều kiện if-else",
            "parentId": null,
            "type": "step",
            "isNested": true,
            "nestedType": "step",
            "options": {
              "type": "if-else-condition",
              "variableName": "Admin_sheet_shoppe",
              "comparator": "equal",
              "compareValue": "{{Admin_sheet_shoppe}}",
              "stepsIfSatisfyCondition": [],
              "stepsIfNotSatisfyCondition": [
                {
                  "id": "joJXwxk6KM",
                  "name": "Thực thi mã javascript",
                  "parentId": null,
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "excute-code",
                    "code": "cascsa"
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
            "id": "XfYpW0-YnE",
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
              "indexVariableName": "szxcasc",
              "isShuffle": "false",
              "ignoreIfNotFound": "false",
              "elementSelectorVariableName": "",
              "steps": [
                {
                  "id": "vmioKfNT0m",
                  "name": "Thực thi mã javascript",
                  "parentId": null,
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "excute-code",
                    "code": "csa"
                  },
                  "chosen": false,
                  "selected": false
                },
                {
                  "id": "FJB22DHOk_",
                  "name": "Điều kiện if-else",
                  "parentId": null,
                  "type": "step",
                  "isNested": true,
                  "nestedType": "step",
                  "options": {
                    "type": "if-else-condition",
                    "variableName": "Admin_sheet_shoppe",
                    "comparator": "equal",
                    "compareValue": "{{Bien1}}",
                    "stepsIfSatisfyCondition": [
                      {
                        "id": "piA0h7XezH",
                        "name": "Thực thi mã javascript",
                        "parentId": null,
                        "type": "step",
                        "steps": [],
                        "options": {
                          "type": "excute-code",
                          "code": "cascsa"
                        },
                        "chosen": false,
                        "selected": false
                      }
                    ],
                    "stepsIfNotSatisfyCondition": []
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
            "id": "vuR7SIsrPF",
            "name": "Click chuột chọn sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": " (//div[@data-sqe=\"name\"])[2]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "UcfBjidNNI",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "N4fAV7BhAB",
            "name": "Cuộn trang xuống",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "JqQhOaOtOA",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "4OJksdqPtq",
            "name": "Cuộn trang lên",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "TlkimVhEw7",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "DdXZ7VdWUQ",
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
            "id": "mHVd2eZDbd",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "npy8n1fHRb",
            "name": "Click chuột chọn sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": " (//div[@data-sqe=\"name\"])[5]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "VIYHk8a-Kh",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "wuoQLzhcu8",
            "name": "Cuộn trang xuống",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "UnA9XcrGAH",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "baq0SEAhUq",
            "name": "Cuộn trang lên",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "up",
              "minDistance": "0",
              "maxDistance": "200",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Bib6O-P6zd",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "9TQI772pXw",
            "name": "Click chuột bấm like",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//button[@class=\"_11Toj4\" and @tabindex=\"0\"]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "cSKHD828h9",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "WBRD66CfGZ",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "up",
              "minDistance": "0",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "hsEpT3IbCv",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "U5moggJ_7m",
            "name": "Click chuột đánh giá sao",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"flex _3T9OoL\"])[1]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "I4snoVnxAE",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "-yefNoF3D3",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "ybWK1DaDMF",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "R5TfXXbLZx",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"flex _3T9OoL\"])[2]",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "xLSKsgQiK3",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "alePFgjL3U",
            "name": "Click chuột chọn đánh giá bình luận",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"flex _3T9OoL\"])[2]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "EkkDQbOMAt",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "4mT2CbAhco",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-xpath",
              "selector": "",
              "xpath": "//div[@class=\"shopee-avatar _3q1-OA\"]",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "mUGeBbFi_U",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "2jDIowq3Uq",
            "name": "Click chuột chọn xem shop",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//div[@class=\"shopee-avatar _3q1-OA\"]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "OR_LAFT-0M",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "WCb10G7OcK",
            "name": "Click chuột chọn theo dõi",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//button[@class=\"shopee-button-outline shopee-button-outline--complement shopee-button-outline--fill\"])[1]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "7pgeKAanuc",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "S8PwXOPw6f",
            "name": "Click chuột chọn tất cả sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//span[contains(text(),\"TẤT CẢ SẢN PHẨM\")]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "1XyAeCcWpS",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "NeQLChPcrE",
            "name": "Click chuột chọn sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"_1G5uNe\" and @data-sqe=\"name\"])[11]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "1dTWOXXLXt",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "aOHnCOOoO4",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "jz2OTETXXQ",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "5000",
              "maxDuration": "7000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "wtbfktXdOp",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "wFAsXkzpZA",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "5000",
              "maxDuration": "7000"
            },
            "chosen": false,
            "selected": false
          }
        ],
        "isNested": true,
        "nestedType": "step",
        "chosen": false,
        "selected": false
      },
      {
        "id": "WO08aTxWh2",
        "name": "mở tab mới tiktok",
        "options": {
          "onError": "stop",
          "retryCount": "1"
        },
        "type": "section",
        "steps": [
          {
            "id": "JANs6hBfyx",
            "name": "Mở tab mới",
            "type": "step",
            "steps": [],
            "options": {
              "type": "open-a-new-tab"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "QIYhyLDRls",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "ALugOFfhkd",
            "name": "Truy cập đường dẫn",
            "type": "step",
            "steps": [],
            "options": {
              "type": "visit-an-url",
              "url": "https://www.tiktok.com/",
              "timeOut": "60000",
              "waitCondition": "networkidle2"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Gfpl-hfqGe",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "8_IAiKTt19",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Iyfr8vd55N",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "dO9CEK2VKz",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "mH9BKOWR0H",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "R_edXCEoyd",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "QfK15yaP1x",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "fXe4xLJgo9",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "s4KVKQwbBW",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          }
        ],
        "isNested": true,
        "nestedType": "step",
        "chosen": false,
        "selected": false
      },
      {
        "id": "gjFvb2ZLrG",
        "name": "truy cập lazada",
        "options": {
          "onError": "skip",
          "retryCount": "1"
        },
        "type": "section",
        "steps": [
          {
            "id": "9WvPyqwuiC",
            "name": "Mở tab mới",
            "type": "step",
            "steps": [],
            "options": {
              "type": "open-a-new-tab"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "8P8se4K1Nb",
            "name": "Truy cập đường dẫn",
            "type": "step",
            "steps": [],
            "options": {
              "type": "visit-an-url",
              "url": "https://www.lazada.vn/",
              "timeOut": "60000",
              "waitCondition": "networkidle2"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Bbgsd_cgTH",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "U23Aa1IQ4i",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Z71rqxo71D",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "KmL9Zsdx78",
            "name": "Chuyển tab",
            "type": "step",
            "steps": [],
            "options": {
              "type": "switch-tab",
              "tabIndex": "2",
              "domain": ""
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "XKkTYs2RhU",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "yBZmsuHkQo",
            "name": "Đóng tab",
            "type": "step",
            "steps": [],
            "options": {
              "type": "close-a-tab",
              "tabIndex": "3"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Wen5iO9HYh",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
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
    "name": "Shopee",
    "type": "block",
    "isNested": true,
    "nestedType": "section",
    "chosen": false,
    "selected": false
  },
  {
    "id": "gnQdAx9FCl",
    "options": {
      "loop": {
        "max": "1",
        "min": "1"
      },
      "random": false
    },
    "sections": [
      {
        "id": "UlYD9NtWIt",
        "name": "Lướt Shopee",
        "options": {
          "onError": "retry",
          "retryCount": "3"
        },
        "type": "section",
        "steps": [
          {
            "id": "Zq1DrdBKEt",
            "name": "Truy cập đường dẫn",
            "type": "step",
            "steps": [],
            "options": {
              "type": "visit-an-url",
              "url": "https://shopee.vn/",
              "timeOut": "60000",
              "waitCondition": "networkidle2"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "ClYizmGLXZ",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "A6fzwcyrLv",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "Escape"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "EqgN4CsGdS",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "SbxL_I_soa",
            "name": "Click chuột chọn ô tìm kiếm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//form[@role=\"search\"]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "SSz134hQHf",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "uUL_YASHe7",
            "name": "Lấy giá trị từ Google sheet",
            "parentId": null,
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-from-gg-sheet",
              "variableName": "Admin_sheet_shoppe_1670228059",
              "fromRowIndex": "1",
              "toRowIndex": "10",
              "columnIndex": "1",
              "sheetIndex": "1",
              "sheetID": "1Hm5jVoE_dgVlqh_igYOH757l3Ept_b9PXHcBhoqDbzI",
              "oldVariable": "Admin_sheet_shoppe"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "AxJAl58Ihr",
            "name": "Lấy giá trị từ mảng",
            "type": "step",
            "steps": [],
            "options": {
              "type": "assign-variable-by-picking-from-array",
              "variableName": "Bien1_1670228059",
              "sourceVariableName": "Admin_sheet_shoppe",
              "valueIndex": "0",
              "randomPosition": "true",
              "oldVariable": "Bien1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "1FbZ09yojY",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "QeXO_TB0jj",
            "name": "Gõ chữ vào phần tử",
            "type": "step",
            "steps": [],
            "options": {
              "type": "type-by-xpath",
              "ignoreIfNotFound": "false",
              "typingDelay": "350",
              "elementIndex": "1",
              "selector": "",
              "xpath": "//form[@role=\"search\"]",
              "randomPosition": "false",
              "content": "{{Bien1}}"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "L_qMLf0QV7",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "CI-zeX6ASZ",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "Enter"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "vMqMqwCSYF",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "MRWXPP8rvN",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "400",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "bdEU_OM57L",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "5s7CM6aPMn",
            "name": "Điều kiện if-else",
            "parentId": null,
            "type": "step",
            "isNested": true,
            "nestedType": "step",
            "options": {
              "type": "if-else-condition",
              "variableName": "Admin_sheet_shoppe_1670228059",
              "comparator": "equal",
              "compareValue": "{{Admin_sheet_shoppe}}",
              "stepsIfSatisfyCondition": [],
              "stepsIfNotSatisfyCondition": [
                {
                  "id": "1kFmj8v-6t",
                  "name": "Thực thi mã javascript",
                  "parentId": null,
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "excute-code",
                    "code": "cascsa"
                  },
                  "chosen": false,
                  "selected": false
                }
              ],
              "oldVariable": "Admin_sheet_shoppe"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "ZsuDYXvAQ1",
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
              "indexVariableName": "szxcasc_1670228059",
              "isShuffle": "false",
              "ignoreIfNotFound": "false",
              "elementSelectorVariableName": "",
              "steps": [
                {
                  "id": "Fzael6XySO",
                  "name": "Thực thi mã javascript",
                  "parentId": null,
                  "type": "step",
                  "steps": [],
                  "options": {
                    "type": "excute-code",
                    "code": "csa"
                  },
                  "chosen": false,
                  "selected": false
                },
                {
                  "id": "L_OYRn4BUi",
                  "name": "Điều kiện if-else",
                  "parentId": null,
                  "type": "step",
                  "isNested": true,
                  "nestedType": "step",
                  "options": {
                    "type": "if-else-condition",
                    "variableName": "Admin_sheet_shoppe_1670228059",
                    "comparator": "equal",
                    "compareValue": "{{Bien1}}",
                    "stepsIfSatisfyCondition": [
                      {
                        "id": "twhJkUv2CW",
                        "name": "Thực thi mã javascript",
                        "parentId": null,
                        "type": "step",
                        "steps": [],
                        "options": {
                          "type": "excute-code",
                          "code": "cascsa"
                        },
                        "chosen": false,
                        "selected": false
                      }
                    ],
                    "stepsIfNotSatisfyCondition": [],
                    "oldVariable": "Admin_sheet_shoppe"
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
            "id": "gxpLRD3OU7",
            "name": "Click chuột chọn sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": " (//div[@data-sqe=\"name\"])[2]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "YJ66yZzxDN",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "124df2LU6g",
            "name": "Cuộn trang xuống",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "zn73OB8dZr",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "mXoyS5wPHj",
            "name": "Cuộn trang lên",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "_3ZdR9yhTG",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "3iPyKYS1Aj",
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
            "id": "dwtb7oB7R2",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "avKOCLzs3X",
            "name": "Click chuột chọn sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": " (//div[@data-sqe=\"name\"])[5]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "owJ5-7z9kl",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "xDX2XacYaQ",
            "name": "Cuộn trang xuống",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "1bViQ71tgw",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "jxSaAm2cb6",
            "name": "Cuộn trang lên",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "up",
              "minDistance": "0",
              "maxDistance": "200",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "mHKIxkiKa5",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "PXVTc70k2r",
            "name": "Click chuột bấm like",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//button[@class=\"_11Toj4\" and @tabindex=\"0\"]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "zePZyiw4ak",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "GS-_C2uutU",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "up",
              "minDistance": "0",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "QeFkcTiiO1",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "BfQkIxCZFY",
            "name": "Click chuột đánh giá sao",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"flex _3T9OoL\"])[1]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "KoW7WslS85",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "VH4uw7ajri",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "0",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "MqRvqcpGY4",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "PtZsqh3i46",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"flex _3T9OoL\"])[2]",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "UtzEgPCmoK",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "oTUafhNiN1",
            "name": "Click chuột chọn đánh giá bình luận",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"flex _3T9OoL\"])[2]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "tDA5jNrx0b",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "5zQmOExaMx",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-xpath",
              "selector": "",
              "xpath": "//div[@class=\"shopee-avatar _3q1-OA\"]",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "GMnTqVOJyA",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "4VGf-C_iHJ",
            "name": "Click chuột chọn xem shop",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//div[@class=\"shopee-avatar _3q1-OA\"]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "v3X40OBN1h",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "kvb_jZWku-",
            "name": "Click chuột chọn theo dõi",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//button[@class=\"shopee-button-outline shopee-button-outline--complement shopee-button-outline--fill\"])[1]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "p3CnLrbCSX",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "48Vrc73Q5H",
            "name": "Click chuột chọn tất cả sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "//span[contains(text(),\"TẤT CẢ SẢN PHẨM\")]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "mcWJo3lTtF",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "N7WR6rj5jG",
            "name": "Click chuột chọn sản phẩm",
            "type": "step",
            "steps": [],
            "options": {
              "type": "click-by-xpath",
              "selector": "",
              "xpath": "(//div[@class=\"_1G5uNe\" and @data-sqe=\"name\"])[11]",
              "ignoreIfNotFound": "false",
              "elementIndex": "1",
              "mouseButton": "left",
              "clickCount": "1",
              "clickDelay": "350",
              "randomPosition": "false"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "DNIBbWCpFG",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Hd1F4Qtq0P",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "pipigelSmG",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "5000",
              "maxDuration": "7000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "CLfsSGwAmq",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "300",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "k4GW6tSVnT",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "5000",
              "maxDuration": "7000"
            },
            "chosen": false,
            "selected": false
          }
        ],
        "isNested": true,
        "nestedType": "step",
        "chosen": false,
        "selected": false
      },
      {
        "id": "hS_tdofxdo",
        "name": "mở tab mới tiktok",
        "options": {
          "onError": "stop",
          "retryCount": "1"
        },
        "type": "section",
        "steps": [
          {
            "id": "Ox5cXfdcvK",
            "name": "Mở tab mới",
            "type": "step",
            "steps": [],
            "options": {
              "type": "open-a-new-tab"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Q6bfnuZLAq",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "0x7pLZoLwf",
            "name": "Truy cập đường dẫn",
            "type": "step",
            "steps": [],
            "options": {
              "type": "visit-an-url",
              "url": "https://www.tiktok.com/",
              "timeOut": "60000",
              "waitCondition": "networkidle2"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "Khxj-k2Xxn",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "bw2hAIUgn-",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "WQz_yJRN6t",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "vCxp_zP0J7",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "eEocJ744Rq",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "1juzYxCPWr",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "GmUHt4nUK-",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "7CxdYCTtHY",
            "name": "Gõ phím",
            "type": "step",
            "steps": [],
            "options": {
              "type": "press-keyboard",
              "key": "ArrowDown"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "GqHZgSNZJN",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          }
        ],
        "isNested": true,
        "nestedType": "step",
        "chosen": false,
        "selected": false
      },
      {
        "id": "ZRfHXyq2CS",
        "name": "truy cập lazada",
        "options": {
          "onError": "skip",
          "retryCount": "1"
        },
        "type": "section",
        "steps": [
          {
            "id": "5GzfHjpVvB",
            "name": "Mở tab mới",
            "type": "step",
            "steps": [],
            "options": {
              "type": "open-a-new-tab"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "IAhA6Fc7Wg",
            "name": "Truy cập đường dẫn",
            "type": "step",
            "steps": [],
            "options": {
              "type": "visit-an-url",
              "url": "https://www.lazada.vn/",
              "timeOut": "60000",
              "waitCondition": "networkidle2"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "uksv9Dra68",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "5K7vDwcKG-",
            "name": "Cuộn trang",
            "type": "step",
            "steps": [],
            "options": {
              "type": "scroll-by-pixel",
              "selector": "",
              "xpath": "",
              "ignoreIfNotFound": "true",
              "direction": "down",
              "minDistance": "100",
              "maxDistance": "500",
              "animation": "smooth",
              "elementIndex": "1"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "gXOTKxcl1J",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "sklVM-jS6f",
            "name": "Chuyển tab",
            "type": "step",
            "steps": [],
            "options": {
              "type": "switch-tab",
              "tabIndex": "2",
              "domain": ""
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "qvn1sLLfjG",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "5A1DAYDvJn",
            "name": "Đóng tab",
            "type": "step",
            "steps": [],
            "options": {
              "type": "close-a-tab",
              "tabIndex": "3"
            },
            "chosen": false,
            "selected": false
          },
          {
            "id": "LNX9H_zGPq",
            "name": "Chờ...",
            "type": "step",
            "steps": [],
            "options": {
              "type": "wait-for-duration",
              "minDuration": "1000",
              "maxDuration": "5000"
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
    "name": "Shopee - copy",
    "type": "block",
    "isNested": true,
    "nestedType": "section",
    "chosen": false,
    "selected": false
  }
]
