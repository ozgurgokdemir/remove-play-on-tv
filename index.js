const observer = new MutationObserver((mutations, observer) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      const remoteButton = document.querySelector('.ytp-remote-button');
      if (!remoteButton) return;
      remoteButton.remove();
      observer.disconnect();
    }
  });
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
