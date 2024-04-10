export const getTransitionDimension = (steps: number) => {
  const baseDimension = 90
  const dimensionPerStep = 38

  const totalDimension = baseDimension + dimensionPerStep * (steps - 1)

  return totalDimension / 16
}

export const getTransitionDuration = (steps: number) => {
  const baseDuration = 0.3
  const durationPerId = 0.1
  const numSteps = steps

  const totalDuration = baseDuration + numSteps * durationPerId

  return totalDuration
}
