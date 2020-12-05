export {}

let bmi: (weight: number, height: number, printable?: boolean) => number = (
  weight: number,
  height: number,
  printable?: boolean
  ): number =>  {

    const bmi: number = weight / (height * height);

    if (printable) {
      console.log(bmi);
    }

    return bmi;
  };

  bmi(123,78);