function onCreated() {
  if (chrome.runtime.lastError) {
    console.log(`Error: ${chrome.runtime.lastError}`)
  } else {
    console.log('Item created successfully')
  }
}
chrome.contextMenus.create({
  id: 'menu-item-1',
  title: 'Menu Item 1',
  contexts: ['link'],
}, onCreated)

chrome.contextMenus.create({
  id: 'separator-1',
  type: 'separator',
  contexts: ['link'],
}, onCreated)

chrome.contextMenus.create({
  id: 'menu-item-2',
  title: 'Menu Item 2',
  contexts: ['link'],
}, onCreated)

chrome.contextMenus.create({
  id: 'separator-2',
  type: 'separator',
  contexts: ['link'],
}, onCreated)

chrome.contextMenus.create({
  id: 'menu-item-3',
  title: 'Menu Item 3',
  contexts: ['link'],
}, onCreated)

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.dir({ info, tab })
})
