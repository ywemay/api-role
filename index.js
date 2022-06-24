exports.ADMIN = 'admin';
exports.ADMINISTRATOR = 'admin';
exports.MANAGER = 'manager';
exports.SELLER = 'seller';
exports.SECRETARY = 'secretary';
exports.MODERATOR = 'secretary';
exports.CUSTOMER = 'customer';
exports.SUPPLIER = 'supplier';
exports.BASIC = 'basic';

const hasRole = (item, role) => {
  let { roles } = item;
  if (roles === undefined) return false;
  if (Array.isArray(role)) {
    for(var i = 0; i<role.length; i++){
      if (hasRole(item, role[i])) return true;
    }
    return false;
  }
  if (!Array.isArray(roles) || roles.length === 0 ) return false;
  if (typeof roles[0] === 'object') roles = roles.map(v => v.id);
  return ( roles && roles.includes(role) );
}

exports.hasRole = hasRole;