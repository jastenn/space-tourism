export default function minTwoDigitInt(num: number) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}
