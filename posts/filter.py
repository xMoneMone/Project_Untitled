def filter_post(min_age, max_age, lang, tier, role, verified, post):
    if verified == 'true':
        verified = True
    else:
        verified = False

    if min_age and int(post['age']) < int(min_age):
        return False
    if max_age and int(post['age']) > int(max_age):
        return False
    if lang and lang.lower() not in post['languages'].lower():
        return False
    if tier and tier != post['tier']:
        return False
    if role and role != post['role'] and role != post['role2'] and role != post['role3']:
        return False
    if verified != post['verified']:
        return False
    return True
