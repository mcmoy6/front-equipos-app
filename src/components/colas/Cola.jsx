import React from 'react';


import './colas-styles.css';


// const data = [
//   {
//       ticketNo: 33,
//       escritorio: 3,
//       agente: 'Fernando Herrera'
//   },
//   {
//       ticketNo: 34,
//       escritorio: 4,
//       agente: 'Melissa Flores'
//   },
//   {
//       ticketNo: 35,
//       escritorio: 5,
//       agente: 'Carlos Castro'
//   },
//   {
//       ticketNo: 36,
//       escritorio: 3,
//       agente: 'Fernando Herrera'
//   },
//   {
//       ticketNo: 37,
//       escritorio: 3,
//       agente: 'Fernando Herrera'
//   },
//   {
//       ticketNo: 38,
//       escritorio: 2,
//       agente: 'Melissa Flores'
//   },
//   {
//       ticketNo: 39,
//       escritorio: 5,
//       agente: 'Carlos Castro'
//   },
// ];

export const Cola = () => {
  return (
    <>
		<div className="container">
			<div className="row gutters">
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
					<div className="pricing-plan">
						<div className="pricing-header">
							{/* <h4 className="pricing-title">Starter</h4> */}
							<div className="pricing-cost">TURNO</div>
							{/* <div className="pricing-save">Save $29.00</div> */}
						</div>
						<div className="pricing-features">
							CE39
						</div>
						{/* <div className="pricing-footer">
							<a href="#" className="btn btn-primary btn-lg">Select Plan</a>
						</div> */}
					</div>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
					<div className="pricing-plan">
						<div className="pricing-header">
							{/* <h4 className="pricing-title">Basic</h4> */}
							<div className="pricing-cost">MÓDULO</div>
							{/* <div className="pricing-save">Save $49.00</div> */}
						</div>
						<div className="pricing-features">
							4
							{/* <li>10GB Linux Web Space</li>
							<li>10 MySQL Databases</li>
							<li>1000 Emails</li>
							<li>750Gb mothly Transfer</li>
							<li>24/7 Tech Support</li>
							<li className="text-muted"><del>Daily Backups</del></li> */}
						</div>
						{/* <div className="pricing-footer">
							<a href="#" className="btn btn-danger btn-lg">Select Plan</a>
						</div> */}
					</div>
				</div>
				
				{/* <div className="row"> */}
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
						<div className="card bg-pattern">
							<div className="card-body">
								<div className='float-left'>

									<h5 className="font-size-20 mt-0 pt-1">TURNO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">35</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>

								<div className='float-right'>

									<h5 className="font-size-20 mt-0 pt-1">MÓDULO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">3</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
						<div className="card bg-pattern">
							<div className="card-body">
								<div className='float-left'>

									<h5 className="font-size-20 mt-0 pt-1">TURNO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">35</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>

								<div className='float-right'>

									<h5 className="font-size-20 mt-0 pt-1">MÓDULO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">3</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
						<div className="card bg-pattern">
							<div className="card-body">
								<div className='float-left'>

									<h5 className="font-size-20 mt-0 pt-1">TURNO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">35</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>

								<div className='float-right'>

									<h5 className="font-size-20 mt-0 pt-1">MÓDULO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">3</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
						<div className="card bg-pattern">
							<div className="card-body">
								<div className='float-left'>

									<h5 className="font-size-20 mt-0 pt-1">TURNO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">35</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>

								<div className='float-right'>

									<h5 className="font-size-20 mt-0 pt-1">MÓDULO</h5>
											{/* <i className="fa fa-file text-primary h4 ml-3"></i> */}
									<h3 className="font-size-20 mt-0 pt-1">3</h3>
										{/* <p className="text-muted mb-0">--</p> */}
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				
			</div>
		{/* </div> */}
    </>
  )
}
