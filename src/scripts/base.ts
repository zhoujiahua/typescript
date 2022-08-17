function clacSum(a: number, b: number): number {
  return a + b;
}

let doc: HTMLElement | null = document.getElementById("app");
if (doc) {
  //   doc.onclick = function (e: Event): void {
  //     let el: EventTarget | null = e.target;
  //     console.log(el, clacSum(12345, 12345));
  //   };

  doc.addEventListener("click", (e: Event) => {
    let el: EventTarget | null = e.target;
    console.log(el, clacSum(12345, 12345));
  });
}
