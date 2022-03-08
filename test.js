<Card>
<Link to={`/artistportal/${unit.id}`} className="card-link" >
    <CardImg width="100%" src={unit.image} alt={unit.name} />
    <CardTitle>
        <h2 class="h2-card">{unit.name}</h2>
    </CardTitle>
    <CardBody>
        {unit.description}
    </CardBody>
</Link>
</Card>