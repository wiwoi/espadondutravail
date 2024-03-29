

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1657},"pages":[{"id":"page-page-1","displayName":"Page 1","link":{"linkType":"LinkTypePage","href":"#!page-page-1"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-arabe","displayName":"Arabe","link":{"linkType":"LinkTypePage","href":"#!page-arabe"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-fran-ais","displayName":"Français","link":{"linkType":"LinkTypePage","href":"#!page-fran-ais"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-anglais","displayName":"Anglais","link":{"linkType":"LinkTypePage","href":"#!page-anglais"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-math-matiques","displayName":"Mathématiques","link":{"linkType":"LinkTypePage","href":"#!page-math-matiques"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-histoire","displayName":"Histoire","link":{"linkType":"LinkTypePage","href":"#!page-histoire"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-g-ographie","displayName":"Géographie","link":{"linkType":"LinkTypePage","href":"#!page-g-ographie"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sciences-de-la-vie-et-de-la-terre","displayName":"Sciences de la vie et de la terre","link":{"linkType":"LinkTypePage","href":"#!page-sciences-de-la-vie-et-de-la-terre"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sciences-de-la-physiques-et-de-la-chimie","displayName":"Sciences de la physiques et de la chimie","link":{"linkType":"LinkTypePage","href":"#!page-sciences-de-la-physiques-et-de-la-chimie"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sciences-conomie-et-sociale","displayName":"Sciences économie et sociale","link":{"linkType":"LinkTypePage","href":"#!page-sciences-conomie-et-sociale"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false},{"id":"page-sciences-religieuses","displayName":"Sciences religieuses","link":{"linkType":"LinkTypePage","href":"#!page-sciences-religieuses"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
const keywordIter = campaign.keywords().get();
for (const keyword of keywordIter) {
  let oldBid = startingBids[keyword.getText()];
  if (!oldBid) {
    // If we don't have a starting bid, keyword has been added since we
    // started testing.
    oldBid = keyword.bidding().getCpc() || keyword.getAdGroup().bidding().getCpc();
    startingBids[keyword.getText()] = oldBid;
  }
  const newBid = oldBid * multiplier;
  keyword.bidding().setCpc(newBid);
}