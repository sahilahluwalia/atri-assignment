import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Div7": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Div9": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Div17": {
      "callbacks": {}
    },
    "Div29": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Div33": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Div35": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Div48": {
      "callbacks": {}
    },
    "Div56": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "Div54": {
      "callbacks": {}
    },
    "Div57": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "Div72": {
      "callbacks": {}
    },
    "Div74": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Div75": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Div77": {
      "callbacks": {}
    },
    "Div78": {
      "callbacks": {}
    },
    "Div76": {
      "callbacks": {}
    },
    "Div81": {
      "callbacks": {}
    },
    "Div83": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Div84": {
      "callbacks": {}
    },
    "Div85": {
      "callbacks": {}
    },
    "Div87": {
      "callbacks": {}
    },
    "Div89": {
      "callbacks": {}
    },
    "Div92": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "Div113": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex152": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex151": {
      "callbacks": {}
    },
    "Div104": {
      "callbacks": {}
    },
    "Flex80": {
      "callbacks": {}
    },
    "Div121": {
      "callbacks": {}
    },
    "Flex153": {
      "callbacks": {}
    },
    "Div123": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {}
    },
    "Flex164": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Flex165": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Flex155": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex156": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Div166": {
      "callbacks": {}
    },
    "Flex244": {
      "callbacks": {}
    },
    "Flex245": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Flex246": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Flex247": {
      "callbacks": {}
    },
    "Flex270": {
      "callbacks": {}
    },
    "Div167": {
      "callbacks": {}
    },
    "Flex249": {
      "callbacks": {}
    },
    "Flex250": {
      "callbacks": {}
    },
    "Flex265": {
      "callbacks": {}
    },
    "Flex251": {
      "callbacks": {}
    },
    "Flex266": {
      "callbacks": {}
    },
    "Flex252": {
      "callbacks": {}
    },
    "Flex267": {
      "callbacks": {}
    },
    "Div170": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex263": {
      "callbacks": {}
    },
    "Flex264": {
      "callbacks": {}
    },
    "TextBox14": {
      "custom": {
        "text": "user interfaces for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div10": {
      "callbacks": {}
    },
    "Div109": {
      "callbacks": {}
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/webflow-template-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cart.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "I'm Sam, and I design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "App X --- Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Visit project  ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Browse Portfolio ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div32": {
      "callbacks": {}
    },
    "TextBox54": {
      "custom": {
        "text": "Who’s behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "About me  ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Visit project  ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Technology --- Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Brand refresh for Technology app"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "Visit project  ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "Website redesign for Consulting X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "Consulting X --- Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "Visit project  ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Illustration design for Education X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "Education X --- Illustrations"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div58": {
      "callbacks": {}
    },
    "Div73": {
      "callbacks": {}
    },
    "TextBox111": {
      "custom": {
        "text": "Browse more articles ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "Articles & News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/art1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "What did i learn from  doing 50+ design sprints"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Design --- September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div82": {
      "callbacks": {}
    },
    "TextBox119": {
      "custom": {
        "text": "Typography --- September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "5 free hot typographies to download in 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/art2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div88": {
      "callbacks": {}
    },
    "Div100": {
      "callbacks": {}
    },
    "TextBox121": {
      "custom": {
        "text": "Interested in working together? Get in touch today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icon.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox228": {
      "custom": {
        "text": "Copyright © Webfolio X | Designed by BRIX Templates - Powered by Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-dribbble-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-behance-30.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-linkedin-circled-30.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-twitter-30.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-instagram-old-48.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/icons8-facebook-30.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div120": {
      "callbacks": {}
    },
    "TextBox247": {
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox248": {
      "custom": {
        "text": "Start Here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox249": {
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox250": {
      "custom": {
        "text": "404 Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox251": {
      "custom": {
        "text": "Password Protected"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox252": {
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox253": {
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox254": {
      "custom": {
        "text": "More Templates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox246": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox229": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox231": {
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox232": {
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox233": {
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox234": {
      "custom": {
        "text": "Blog v1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox235": {
      "custom": {
        "text": "Blog v2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox236": {
      "custom": {
        "text": "Blog v3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "custom": {
        "text": "Blogpost"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox238": {
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox239": {
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox240": {
      "custom": {
        "text": "Home v1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox241": {
      "custom": {
        "text": "Home v2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox242": {
      "custom": {
        "text": "Home v3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox243": {
      "custom": {
        "text": "About v1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox244": {
      "custom": {
        "text": "About v2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox245": {
      "custom": {
        "text": "About v3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image50": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/webflow-template-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox255": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox256": {
      "custom": {
        "text": "Subscribe ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "custom": {
        "text": "Enter your email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div122": {
      "callbacks": {}
    },
    "TextBox328": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox329": {
      "custom": {
        "text": "User Research"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div174": {
      "callbacks": {}
    },
    "Image78": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/user.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image79": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/brand.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div175": {
      "callbacks": {}
    },
    "TextBox330": {
      "custom": {
        "text": "Brand Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox331": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image80": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/motion.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div176": {
      "callbacks": {}
    },
    "TextBox332": {
      "custom": {
        "text": "Motion Graphics"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox333": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/ui.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div171": {
      "callbacks": {}
    },
    "TextBox322": {
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox323": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox324": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox325": {
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div172": {
      "callbacks": {}
    },
    "Image76": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/product.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox326": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nulla ac nisi facilisis."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox327": {
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div173": {
      "callbacks": {}
    },
    "Image77": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/web.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox320": {
      "custom": {
        "text": "My Work Skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox321": {
      "custom": {
        "text": "Browse resume ↗"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
