import { observable, Tracker } from '@formily/reactive'

const obs = observable({
  aa: 11,
})

const view = () => {
  console.debug('view', obs.aa)
}

const tracker = new Tracker(() => {
  tracker.track(view)
})

const openTrack = () => tracker.track(view)

const update = () => obs.aa = 22

const dispose = () => tracker.dispose()