const Card = ({ children,title,color='blue'}) => {
  const colorClasses = {
    blue: 'border-l-blue-500 bg-blue-300',
    green: 'border-l-green-500 bg-green-300',
    purple: 'border-l-purple-500 bg-purple-300',
    red: 'border-l-red-500 bg-red-300',
  };
  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md grow`}>
      {title && <h3 className="text-xl font-bold mb-3 text-gray-100 text-center">{title}</h3>}
      <div>
        {children}
      </div>
    </div>
  )
}

const Container = ({ children, layout='vertical' }) => {
  const layoutClasses = {
    vertical: 'flex flex-col space-y-4',
    horizontal: 'flex flex-row flex-wrap gap-4'
  };
  return (
    <div className={`${layoutClasses[layout]}`}>
      { children}
    </div>
  )
}

const ChildrenProps = () => {
  return (
    <div className='bg-white mt-4 rounded-sm p-3'>
      <h1 className='font-bold text-2xl py-2'>
        Children Props
      </h1>
      <p className="text-sm mb-3">Card component with children</p>
      <Container layout="horizontal">
        <Card title='User Profile' color="blue">
          <h1 className="text-white">Name : Athmik AV</h1>
          <h1 className="text-white">Email : Athmik@gmail.com</h1>
          <h1 className="text-white">Role : Developer</h1>
        </Card>
        <Card title='User Profile' color="green">
          <p className="text-white">Statistics</p>
          <p className="text-white">Total User : <span className="font-bold text-black">1000</span></p>
        </Card>
        <Card title='User Profile' color="red">
          <p className="text-white">Name : babith AV</p>
          <p className="text-white">Email : babith@gmail.com</p>
        </Card>
        <Card title='User Profile' color="purple">
          <p className="text-white">Name : babith AV</p>
          <p className="text-white">Email : babith@gmail.com</p>
        </Card>
      </Container>

    </div>
  )
}

export default ChildrenProps