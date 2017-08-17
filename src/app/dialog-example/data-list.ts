
import { Injectable } from '@angular/core';

export interface Menu {
  "menu": string; 
  "list": { "menu": string; }[]; 
}

 export const MENU_LIST = [
  {
    "menu": "Home",
    "list": []
  },
  {
    "menu": "Email",
    "list": []
  },
  {
    "menu": "Components",
    "list": [
      {
        "menu": "Accordion",
        "list1": [

          {
            "menu": "first",
            "list2": [
              {
                "menu": "second",
                 "list3": [
                   {
                     "menu":"third",
                     "list4":[
                       {
                         "menu":"four"
                       }
                     ]
                   }
                 ]
                  
              },
            ]
          },
          {
            "menu": "Alert1",
            "list2": [
              {
                "menu": "second",
                 "list3": [
                   {
                     "menu":"third",
                     "list4":[
                       {
                         "menu":"four"
                       }
                     ]
                   }
                 ]
                  
              },
            ]
          }
        ]
      },
      {
        "menu": "Alert"
      },
      {
        "menu": "Buttons"
      },
      {
        "menu": "Social Buttons"
      },
      {
        "menu": "Carousel"
      },
      {
        "menu": "Collapse"
      },
      {
        "menu": "Datepicker"
      },
      {
        "menu": "Dropdown"
      },
      {
        "menu": "Modal"
      },
      {
        "menu": "Pagination"
      },
      {
        "menu": "Popover"
      },
      {
        "menu": "Progress Bars"
      },
      {
        "menu": "Rating"
      },
      {
        "menu": "Tabs"
      },
      {
        "menu": "Timepicker"
      },
      {
        "menu": "Tooltip"
      },
      {
        "menu": "typeahead"
      },
      {
        "menu": "Spinners"
      }
    ]
  },
  {
    "menu": "Icons",
    "list": [
      {
        "menu": "Linea"
      },
      {
        "menu": "FontAwesome"
      },
      {
        "menu": "Simple Line Icons"
      }
    ]
  },
  {
    "menu": "Taskboard",
    "list": []
  },
  {
    "menu": "Cards",
    "list": [
      {
        "menu": "Basic"
      },
      {
        "menu": "Portlets"
      },
      {
        "menu": "Draggable"
      }
    ]
  },
  {
    "menu": "Forms",
    "list": [
      {
        "menu": "Masks"
      },
      {
        "menu": "Editor"
      },
      {
        "menu": "Validation"
      },
      {
        "menu": "Upload"
      },
      {
        "menu": "Tree"
      }
    ]
  },
  {
    "menu": "Tables",
    "list": [
      {
        "menu": "Basci"
      },
      {
        "menu": "Responsive"
      }
    ]
  },
  {
    "menu": "Datatables",
    "list": [
      {
        "menu": "Fullscreen"
      },
      {
        "menu": "Editing"
      },
      {
        "menu": "Filter"
      },
      {
        "menu": "Paging"
      },
      {
        "menu": "Pinning"
      },
      {
        "menu": "Selection"
      },
      {
        "menu": "Sorting"
      }
    ]
  },
  {
    "menu": "Charts",
    "list": [
      {
        "menu": "Bar"
      },
      {
        "menu": "Pie"
      },
      {
        "menu": "Line"
      },
      {
        "menu": "Misc"
      }
    ]
  },
  {
    "menu": "Maps",
    "list": [
      {
        "menu": "Google"
      },
      {
        "menu": "Fullscreen"
      }
    ]
  },
  {
    "menu": "Pages",
    "list": [
      {
        "menu": "Invoice"
      },
      {
        "menu": "Forum"
      },
      {
        "menu": "Timeline"
      },
      {
        "menu": "Activity"
      },
      {
        "menu": "Pricing"
      },
      {
        "menu": "Blank"
      }
    ]
  },
  {
    "menu": "Landing",
    "list": []
  },
  {
    "menu": "Authentication",
    "list": [
      {
        "menu": "Signin"
      },
      {
        "menu": "Signup"
      },
      {
        "menu": "Forgot"
      },
      {
        "menu": "Lockscreen"
      }
    ]
  },
  {
    "menu": "Error",
    "list": [
      {
        "menu": "404"
      },
      {
        "menu": "500"
      },
      {
        "menu": "503"
      }
    ]
  },
  {
    "menu": "Calendar",
    "list": []
  },
  {
    "menu": "Media",
    "list": [
      {
        "menu": "Grid"
      },
      {
        "menu": "Tile"
      },
      {
        "menu": "List"
      }
    ]
  },
  {
    "menu": "Widgets",
    "list": []
  },
  {
    "menu": "Social",
    "list": []
  },
  {
    "menu": "Docs",
    "list": []
  }
];

// @Injectable()
// export class MENU_LIST {
//   getAll(): Menu[] {
//     return Menu_List;
//   }

//   add(menu: Menu) {
//    Menu_List.push(menu);
//   }
// }