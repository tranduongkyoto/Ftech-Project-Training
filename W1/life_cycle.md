Có thể group các phương thức lifecycle ra 3 nhóm, ứng với 4 giai đoạn của component: Mounting, Updating, Unmounting, Error Handling

Mounting

Nó sẽ theo thứ tự sau

constructor()

static getDerivedStateFromProps()

render()

componentDidMount()

Updating

Các phương thức này sẽ được gọi khi có sự thay đổi của state hoặc props

static getDerivedStateFromProps()

shouldComponentUpdate()

render()

getSnapshotBeforeUpdate()

componentDidUpdate()

Unmounting

Phương thức được gọi trước khi remove component khỏi DOM

componentWillUnmount()

Error Handling

Bất kể lỗi ở đâu trong component, nó sẽ gọi đến phương thức này

componentDidCatch()
