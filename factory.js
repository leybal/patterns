class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}
  
class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}
  
class MemberFactory {
    constructor() {
        MemberFactory.list = {
            simple: SimpleMembership,
            premium: PremiumMembership
        }
    }
    
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}
  
const factory = new MemberFactory()

const members = [
    factory.create('Vladilen', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('Ivan'),
]
  
members.forEach(m => {
    m.define()
})
