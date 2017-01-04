jQuery("#simulation")
  .on("click", ".s-a1471b70-9d18-4c33-8bf8-921c35098c9d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_18",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_18",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a73d37d5-a09a-4310-867f-8678e15b66b3",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-a1471b70-9d18-4c33-8bf8-921c35098c9d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_2",
                    "effect": {
                      "type": "fade",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-a1471b70-9d18-4c33-8bf8-921c35098c9d .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_4",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_2 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_6",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_3 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-a1471b70-9d18-4c33-8bf8-921c35098c9d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": "Type something"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_2 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": "Type something"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_6"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-a1471b70-9d18-4c33-8bf8-921c35098c9d #s-Input_3 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });